"use strict";

const postRoute  = require('express').Router();

// TODO could merge userRoute and postRoute
// BASIC FRAMEWORK FOR ROUTE *** MAKE SURE TO INCREMENTALLY TEST
module.exports = function(fn) {

  postRoute.post('/', (req, res) => {
    if(req.session.userID){
      let id = req.session.userID;
      let url = req.body.url; // TODO enter function that cleans url
      let title = req.body.title;
      let description = req.body.description;
      let tag = req.body.tag;

      fn.createPost({
        id: id,
        url: url, // TODO resolve postdate issue (make db generate postdate automatically)
        title: title,
        description: description,
        tag: tag
      }, () => {
        res.status(201).send();
      });
    }

  });

  return postRoute;

};
