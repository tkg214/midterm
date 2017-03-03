'use strict';

const registerRoute = require('express').Router();

module.exports = function(fn) {

  // WORKING DO NOT TOUCH
  registerRoute.post('/', (req, res) => {
    if(req.session.userID){
      res.redirect(200, '/');
      return;
    }
    let user = {
      'firstName': req.body.firstName,
      'lastName': req.body.lastName,
      'email': req.body.email,
      'handle': req.body.handle
    };
    fn.createUser(user, () => {
      res.redirect(301, '/');
    });
  });

  return registerRoute;

};

// TODO error handling if user exists
