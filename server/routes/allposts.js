'use strict';

const allPostsRoute = require('express').Router();

module.exports = function(fn) {

  allPostsRoute.get('/', (req, res) => {
    fn.getAllPosts((posts) => {
      posts.forEach((post) => {
        console.log('each post ', post);
        fn.getLikes(post.id, (likes) => {
          post.num_likes = likes;
          //console.log('after', post);
        });
        fn.getTag(post.id, (tag) => {
          //console.log('tag is', tag);
          post.tag = tag;
          //console.log('after', post);
        });
        fn.getComments(post.id, (comments) => {
          //console.log('comments: ', comments.rows);
          post.comments = comments.rows;
          //console.log('after comments: ', post);
        });
        fn.getRating(post.id, (rating) => {
          console.log(rating);
          post.rating = rating;
        })
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
