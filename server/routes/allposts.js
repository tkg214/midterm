'use strict';

const allPostsRoute = require('express').Router();

module.exports = function(fn) {

  allPostsRoute.get('/', (req, res) => {
    fn.getAllPosts((posts) => {
      posts.forEach((post) => {
        fn.getLikes(post.id, (likes) => {
          post.num_likes = likes;
        });
        fn.getTag(post.id, (tag) => {
          post.tag = tag;
        });
        fn.getComments(post.id, (comments) => {
          post.comments = comments.rows;
        });
        fn.getRating(post.id, (rating) => {
          post.rating = rating;
        })
        console.log('post data:', post);
      });
      res.json(posts);
    });
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
