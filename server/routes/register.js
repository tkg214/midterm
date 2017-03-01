'use strict';

const registerRoute = require('express').Router();

module.exports = function(fn) {

  // BASIC FRAMEWORK FOR ROUTE *** MAKE SURE TO INCREMENTALLY TEST
  registerRoute.post('/', (req, res) => {
    let email = req.body.email;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let password = bcrypt.hashSync(req.body.regpassword, 10);
    // TODO find best method to store register_date

    // TODO implement password storage in db and use it when creating user below
    fn.createUser({
      email: email,
      first_name: first_name,
      last_name: last_name
    }, () => {
      // TODO send cookie or session upon successfull registration
      // TODO find best method for error handling
      res.status(201).send();
    })
  });

  return registerRoute;

};
