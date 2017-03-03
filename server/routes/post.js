"use strict";

const postRoute  = require('express').Router();

// TODO could merge userRoute and postRoute
// BASIC FRAMEWORK FOR ROUTE *** MAKE SURE TO INCREMENTALLY TEST
module.exports = function(fn) {

  postRoute.get('/', (req, res) => {
    if (true) {
      let postID = req.query.postid;
      fn.getPost(postID, (post)=> {
        res.send(post);
        return;
      });
    }
  });

  postRoute.post('/', (req, res) => {
    if(req.session.userID){
      let user_id = req.session.userID[0].id;
      // TODO: clear URL's from #, messes with AJAX
      let url = req.body.url;
      let title = req.body.title;
      let content = req.body.content;
      let tag = req.body.tag;

      fn.createPost({
        user_id: user_id,
        url: url,
        title: title,
        content: content,
        tag: tag
      }, () => {
        res.status(201).send();
      });
    } else {
      res.redirect('/login');
      return;
    }

  });

  return postRoute;

};
