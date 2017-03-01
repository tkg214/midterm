"use strict";

const express       = require('express');
const postRoute  = express.Router();

module.exports = function(fn) {

  postRoute.get("/", function(req, res) {
    fn.getPosts((err, tweets) => {
    //   if (err) {
    //     res.status(500).json({ error: err.message });
    //   } else {
    //     res.json(tweets);
    //   }
    // });
    });
  });

  postRoute.post("/", function(req, res) {
    // if (!req.body.text) {
    //   res.status(400).json({ error: 'invalid request: no data in POST body'});
    //   return;
    // }

    // const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    // const tweet = {
    //   user: user,
    //   content: {
    //     text: req.body.text
    //   },
    //   created_at: Date.now()
    // };

    // fn.savePost(tweet, (err) => {
    //   if (err) {
    //     res.status(500).json({ error: err.message });
    //   } else {
    //     res.status(201).send();
    //   }
    // });
  });
  return postRoute;
};
