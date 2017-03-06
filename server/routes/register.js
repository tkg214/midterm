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
      'handle': req.body.handle.toLowerCase()
    };

    fn.checkDupedHandle(req.body.handle.toLowerCase(), (result) => {
      if (result[0]) {
        res.send(result[0])
      } else {
        fn.createUser(user, () => {
          res.status(201).send();
          return;
        });
      }
    });

  });

  return registerRoute;

};
