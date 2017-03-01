"use strict";

const postRoute  = require('express').Router();

// TODO could merge userRoute and postRoute
// BASIC FRAMEWORK FOR ROUTE *** MAKE SURE TO INCREMENTALLY TEST
module.exports = function(fn) {

  postRoute.post('/', (req, res) => {
    let user = req.cookies['user_id']; // TODO could change to session instead upon login implementation
    let url = req.body.url; // TODO enter function that cleans url
    let first_name; // TODO find first name based on cookie
    let last_name;
    let content = req.body.content;

    fn.createPost({
      user_id: user,
      content: content,
      url_ref: url // TODO resolve postdate issue (make db generate postdate automatically)
    }, () => {
      res.status(201).send();
    });
  });

  return postRoute;

};
