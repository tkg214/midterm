'use strict';

const registerRoute = require('express').Router();

module.exports = function(fn) {

  // BASIC FRAMEWORK FOR ROUTE *** MAKE SURE TO INCREMENTALLY TEST
  registerRoute.post('/', (req, res) => {
    let handle = req.body.handle;

    // let password = bcrypt.hashSync(req.body.regpassword, 10);
    // TODO find best method to store register_date

    // TODO implement password storage in db and use it when creating user below
    fn.createUser(handle, () => {
      // TODO send cookie or session upon successfull registration
      // TODO find best method for error handling
      res.status(201).send();
    });
  });

  return registerRoute;

};
