"use strict";

const loginRoute  = require('express').Router();

// BASIC FRAMEWORK FOR ROUTE *** MAKE SURE TO INCREMENTALLY TEST
module.exports = function(fn) {

  loginRoute.post('/', (req, res) => {
    let email = req.body.email;

    // TODO implement password column in db
    fn.findUser(email, (user) => {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.cookies.user_id = user.id;
        res.status(201).send();
      } else {
        res.status(403).send('Your email and password do not match.')
      }
    });
  });

  return loginRoute;

};
