'use strict';

const userOwnLikesRoute = require('express').Router();

module.exports = function(fn) {

  userOwnLikesRoute.get('/', (req, res) => {
    const user_id = req.session.userID[0].id;
    fn.getUserOwnLikes(user_id, (posts) => {
      res.json(posts);
    });
  });

  return userOwnLikesRoute;

};
