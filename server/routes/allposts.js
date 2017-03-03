'use strict';

const allPostsRoute = require('express').Router();

module.exports = function(fn) {

  allPostsRoute.get('/', (req, res) => {
    fn.getAllPosts((posts) => {
      res.json(posts);
    });
  });

  //To categorize posts by tag
  allPostsRoute.post('/', (req, res) => {
    const tag = req.body.tag;
    fn.getPostsByTag(tag, (posts) => {
      res.json(posts);
    });
  });

  return allPostsRoute;

};
