"use strict";

const settings = require('./knexsettings.json');
const knex = require('knex')(settings);

module.exports = {

  // Return post-related data:
  // post id, tag number of likes, avg rating, and handle of the poster
  getPostRelatedData: (postId, done) => {
    knex.raw("SELECT posts.id AS post_id, posts.title AS title, (SELECT users.handle FROM users JOIN posts ON users.id = posts.user_id WHERE posts.id = ?), posts.url, posts.post_date, tag.tag, (SELECT COUNT(post_id) FROM likes WHERE post_id = ?) AS likes, AVG(ratings.rating) AS rating FROM posts JOIN tag ON posts.id = tag.post_id JOIN likes ON posts.id = likes.post_id JOIN ratings ON posts.id = ratings.post_id WHERE posts.id = ? GROUP BY posts.id, tag.tag", [postId, postId, postId])
    .then(done);
  },

  getPostDataNew: (postId, callback) => {
    const array = [];
    knex.raw('SELECT posts.id, title, url, post_date, tag.tag, (SELECT EXISTS (SELECT COUNT(post_id) FROM likes WHERE post_id = ?)) AS likes, (SELECT EXISTS (SELECT AVG(rating) FROM ratings WHERE post_id = ?)) AS rating, (SELECT handle FROM users WHERE posts.user_id = users.id) AS handle FROM posts, tag, users WHERE posts.id = ? LIMIT 1;', [postId, postId, postId] )
    .then ((result) => {
      callback(result);
    });
  },

  getPost: (postID, done) => {
    knex.select().from('posts').where({ 'id': postID}).then(done);
  },

  getAllPosts: (done) => {
    knex.select().from('posts').then(done);
  },

  getSearchDataFromPosts: (ref, callback) => {
    knex.select('title', 'content', 'id').from('posts')
    .then( (result) => {
      var re = new RegExp(ref.toLowerCase(), "g");
      let array = [];
      for( let index in result ){
        let res1 = result[index].title.toLowerCase().search(re);
        let res2 = result[index].content.toLowerCase().search(re);
        if (res1 === 0 || res2 === 0){
          array.push(result[index].id);
        }
      }
      callback(array);
    });
  },

  getPostsByTag: (tag, done) => {
      knex.raw('SELECT post_id FROM tag WHERE tag = ?', [tag]).then((result) => {
        //console.log('query result', result);
        done(result);
      });
    },

  getPostsbyPostIdArray: (postIdArray, done) => {
    knex.select().from('posts').whereIn('id', postIdArray).then(done);
  },

  createUser: (user, done) => {
    knex.insert({
      'first_name': user.firstName,
      'last_name': user.lastName,
      'email': user.email,
      'register_date': new Date,
      'handle': user.handle
    }).into('users').then(done);
  },

  findUser: (user, done) => {
    knex.select('id').from('users').where({
      handle: user
    }).then(done);
  },

  findUserById: (id, done) => {
    knex.select('handle').from('users').where({
      'id': id
    }).then(done);
  },


  updateUserProfile: (userId, data, done) => {
    knex('users').where({id: userId}).update({
      first_name: data.newFirstName,
      last_name: data.newLastName,
      email: data.newEmail
    })
    .then(done);
  },

  getAllPostsOfUser: (user, done) => {
    knex.select().from('posts').where({
      user_id: user
    }).then(done);
  },

  createPost: (data, done) => {
    knex.insert({
      user_id: data.user_id,
      url: data.url,
      title: data.title,
      content: data.content,
      post_date: new Date
    }).into('posts')
    .then(() => {
      return knex.raw('SELECT id FROM posts ORDER BY id DESC LIMIT 1');
    })
    .then(done);
  },

  finishCreatePost: (postId, tag, userId, done) => {
    knex.raw('INSERT into tag (tag, post_id) VALUES (?,?)', [tag, postId])
    .then(() => {
      return knex.raw('INSERT into likes (user_id, post_id, date) VALUES (?,?,?)', [userId, postId, new Date]);
    })
    .then(() => {
      return knex.raw('INSERT into ratings (rating, user_id, post_id, date) VALUES (?,?,?,?)', [0, userId, postId, new Date]);
    })
    .then(() => {
      return knex.raw('INSERT into comments (content, user_id, post_id, date) VALUES (?,?,?,?)', ['', userId, postId, new Date]);
    })
    .then(done);
  },

  getUrls: (callback) => {
    knex.select('url').from('posts')
    .then((result) => {
      callback(result);
    });
  },

  getLikes: (postID, callback) => {
    knex.raw('SELECT COUNT(post_id) from likes where post_id = ?;', [postID])
    .then((result) => {
      callback(result.rows[0].count);
    });
  },

  getUserOwnLikes: (userId, done) => {
    knex.select('post_id').from('likes').where({user_id: userId}).then(done);
  },

  getUsersLikes: (postID, callback) => {
    knex.raw('SELECT user_id from likes WHERE post_id = ?;', [postID])
    .then((users) => {
      callback(users);
    });
  },

  incRating: (postID, userID, ratingNum, callback) => {
    knex.raw('SELECT rating FROM ratings WHERE post_id = ? and user_id = ?', [postID, userID])
    .then( (result) => {
      if(result.rowCount >= 1){
        knex.raw('update ratings SET rating = ? WHERE  post_id = ? AND user_id = ?;', [ratingNum, postID, userID])
        .then(() => {
          knex.raw('SELECT ROUND(AVG(rating),0) AS avg_rating, post_id FROM ratings WHERE post_id = ? GROUP BY rating, post_id', [postID])
          .then( (result) => {
            callback(result);
          });
        });
      } else {
        knex.raw('INSERT into ratings (post_id, user_id, rating, date) VALUES (?,?,?,?)', [postID, userID, ratingNum, new Date])
        .then(() => {
          knex.raw('SELECT ROUND(AVG(rating),0) as avg_rating, post_id FROM ratings WHERE post_id = ? GROUP BY rating, post_id', [postID])
          .then( (result) => {
            callback(result);
          });
        });
      }
    });
  },

  getRating: (postId, callback) => {
    knex.raw('SELECT ROUND(AVG(rating),0) as avg_rating, post_id FROM ratings WHERE post_id = ? GROUP BY rating, post_id', [postId])
    .then((result) => {
      if(result.rows[0]) {
        callback(result.rows[0].avg_rating);
      } else {
        callback(0);
      }
    });
  },

  getUserRating: (postId, userId, callback) => {
    knex.raw('SELECT rating, post_id, user_id FROM ratings WHERE post_id = ? AND user_id = ?', [postId, userId])
    .then( (result) => {
      callback(result);
    })
  },

  incLikes: (postID, userID, callback) => {
    knex.raw('SELECT user_id from likes WHERE post_id = ? AND user_id = ?;', [postID, userID])
    .then((users) => {
      if(users.rowCount >= 1){
        knex.raw('DELETE FROM likes where user_id = ? AND post_id = ?;', [userID, postID])
          .then(() => {
            knex.raw('SELECT COUNT(post_id) from likes where post_id = ?;', [postID])
            .then((result) => {
              callback(result.rows[0].count);
            });
          });
      } else {
        knex.raw("INSERT INTO likes (user_id, post_id, date) VALUES (?,?,?)", [userID, postID, new Date])
        .then(() => {
          knex.raw('SELECT COUNT(post_id) from likes where post_id = ?;', [postID])
            .then((result) => {
              callback(result.rows[0].count);
            });
        });
      }
    });
  },

  getLikesByUserId: (userID, done) => {
    knex('likes').where({ 'user_id': userID }).then(done);
  },

  getPostsByPostId: (postID, done) => {
    knex('posts').where({ 'post_id': postID }).then(done);
  },

  delUserLikes: (postID, userID, callback) => {
    knex.raw('DELETE FROM likes where user_id = ? AND post_id = ?;', [userID, postID]);
    callback();
  },

  incUserLikes: (postID, userID, callback) => {
    knex('likes').insert({ user_id: userID, post_id: postID, date: new Date });
    callback();
  },

  createComment: (data, done) => {
    knex.insert({
      content: data.content,
      user_id: data.userID,
      post_id: data.postID,
      date: new Date()
    }).into('comments').then(done);
  },

  getComments: (postID, done) => {
    knex.raw('SELECT comments.content, comments.date, comments.id, users.handle FROM comments JOIN users ON comments.user_id = users.id WHERE comments.post_id = ?', [postID]).then(done);
  },

  checkDupedURL: (matchurl, done) => {
    knex.select('url').from('posts').where({ 'url': matchurl} ).then(done);
  },

  checkDupedHandle: (matchHandle, done) => {
    knex.select('handle').from('users').where({ 'handle': matchHandle} ).then(done);
  }

};
