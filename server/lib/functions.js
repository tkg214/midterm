"use strict";

const settings = require('./knexsettings.json');
const knex = require('knex')(settings);

module.exports = {

  // TODO: MAKE SURE CALLBACKS ETC ARE CHANGED BELOW
  getAllPosts: (done) => {
    knex.select().from('posts').then(done);
  },

  //Get posts with specific tags
  getPostsByTag: (tag, done) => {
    knex.select().from('posts').join('tag', {'posts.id': 'tag.post_id'}).where({'tag.tag': tag}).then(done);
  },

// Working, DO NOT TOUCH
  createUser: (user, done) => {
    knex.insert({
      'first_name': user.firstName,
      'last_name': user.lastName,
      'email': user.email,
      'register_date': new Date,
      'handle': user.handle
      // TODO: password storage
    }).into('users').then(done);
  },

// WORKING, DO NOT TOUCH
  findUser: (user, done) => {
    knex.select('id').from('users').where({
      handle: user
    }).then(done);
  },

// Provide req.session.userID and return the username (handle)
  findUserById: (id, done) => {
    knex.select('handle').from('users').where({
      'id': id
    }).then(done);
  },

  getAllPostsForUser: (user, done) => {
    knex.select().from('posts').where({
      user_id: user
      // TODO: IS user_id properly stored in db?
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
      // return knex.select('id').from('posts').orderBy('id', 'desc').limit('1');
      return knex.raw('SELECT id FROM posts ORDER BY id DESC LIMIT 1');
    })
    .then((postID) => {
      knex.insert({tag: data.tag, post_id: postID });
    });
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

  getUsersLikes: (postID, callback) => {
    knex.raw('SELECT user_id from likes WHERE post_id = ?;', [postID])
    .then((users) => {
      callback(users);
    });
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

  delUserLikes: (postID, userID, callback) => {
    knex.raw('DELETE FROM likes where user_id = ? AND post_id = ?;', [userID, postID]);
    callback();
  },

  incUserLikes: (postID, userID, callback) => {
    knex('likes').insert({ user_id: userID, post_id: postID, date: new Date });
    callback();
  },

// HOW TO USE checkDupedURL, place the commented code in another file to run the check.
    // fn.checkDupedURL(req.body.url, function(isDuped){
    //   console.log(isDuped);
    // });

  checkDupedURL: (matchurl, callback) => {
    knex.raw(`SELECT url FROM posts WHERE url = '${matchurl}';`).then((result) => {
      if (result.rowCount === 1)        { callback(result); }
    });
  }
};
