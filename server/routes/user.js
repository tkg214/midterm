'use strict';

const userRoute  = require('express').Router();

// TODO could merge userRoute and postRoute
// BASIC FRAMEWORK FOR ROUTE *** MAKE SURE TO INCREMENTALLY TEST
module.exports = function(fn) {

  userRoute.get('/', (req, res) => {
    const user_id = req.session.userID[0].id;
    fn.getAllPostsOfUser(user_id, (posts) => {
      res.json(posts);
    });
  });

  // TODO find if post_id would work in path
  userRoute.post('/:post_id/edit', (req, res) => {
    const user_id = req.session.userID[0].id;
    const post_id = req.params.post_id;
    const content = req.body.content;
    const url = req.body.url;

    fn.updatePost({
      user_id: user,
      content: content,
      url: url // TODO resolve postdate issue (make db generate postdate automatically)
    }, () => {
      res.status(201).send();
    });
  });

  // userRoute.post('user/:post_id/delete', (req, res) => {
  //   const user = req.session.userID;
  //   const post_id = req.params.post_id;
  //
  //   database.deletePost(post_id, () => {
  //     res.status(201).send();
  //   });
  // });

  return userRoute;

};
