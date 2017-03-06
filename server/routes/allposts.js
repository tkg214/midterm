'use strict';

const allPostsRoute = require('express').Router();

module.exports = function(fn) {

  allPostsRoute.get('/', (req, res) => {
    fn.getAllPosts((posts) => {
      res.json(posts);
    });

    // let allPosts = {};
    // fn.getAllPosts((posts) => {
    //   //console.log(posts);
    //   let index = 0;
    //   while(index < posts.length) {
    //     let postId = posts[index].id;
    //     console.log('post id', postId);
    //     fn.getPostRelatedData(postId, (data) => {
    //       let postData = data.rows[0];
    //       allPosts[index+1] = postData;
    //       console.log('new post', allPosts[index+1]);
    //     });
    //     index += 1;
    //   }
    // });
    // console.log(allPosts);
    // res.json(allPosts);



    // fn.getAllPosts((posts) => {
    //   posts.forEach((post) => {
    //     fn.getLikes(post.id, (likes) => {
    //       fn.getTag(post.id, (tag) => {
    //         fn.getComments(post.id, (comments) => {
    //           fn.getRating(post.id, (rating) => {
    //             post.num_likes = likes;
    //             post.tag = tag;
    //             post.comments = comments.rows;
    //             post.rating = rating;
    //             //onsole.log('posts data inside:', post);
    //             //console.log('posts data outside:', posts);
    //           });
    //         });
    //       });
    //     });
    //     res.json(posts);
    //   });
    //   // console.log('posts data outside:', posts);
    //   // res.json(posts);
    // });
  });

  return allPostsRoute;

};

// TODO refactor
//To categorize posts by tag
allPostsRoute.post('/', (req, res) => {
  const tag = req.body.tag;
  fn.getPostsByTag(tag, (posts) => {
    res.json(posts);
  });
});
