'use strict';

const allPostsRoute = require('express').Router();

module.exports = function(fn) {

  allPostsRoute.get('/', (req, res) => {

    fn.getAllPosts((posts) => {
      res.json(posts);
    });
  });

  return allPostsRoute;

};
