'use strict';

const userOwnLikesRoute = require('express').Router();

module.exports = function(fn) {

  userOwnLikesRoute.get('/', (req, res) => {
    const user_id = req.session.userID[0].id;
    fn.getUserOwnLikes(user_id, (postIdArray) => {
      const ids = [];
      postIdArray.forEach( (id) => {
        ids.push(id.post_id);
      });
      fn.getPostsbyPostIdArray(ids, (posts) => {
        res.send(posts);
      });
    });
  });

  return userOwnLikesRoute;

};
