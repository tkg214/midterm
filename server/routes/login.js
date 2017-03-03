// FULLY WORKING, DO NOT TOUCH
// With functions.js fn.findUser function.
// Tested with POSTMAN - Ermis

const loginRoute  = require('express').Router();

module.exports = function(fn) {

  loginRoute.post('/', (req, res) => {
    if(req.session.userID){
      res.redirect(301, '/');
      return;
    }
    let user = req.body.handle;
    fn.findUser(user, (id) => {
      req.session.userID = id;
      // send cookie for jquery usage
      res.cookie('loggedin', 'true')
      res.redirect(200, '/');
    });
  });
  return loginRoute;
};
<<<<<<< HEAD
<<<<<<< HEAD
=======

// TODO error handling if handle does not exist
>>>>>>> d2ba12698b241e7901cfb3a3582ade8fb65a05e6
=======


// TODO error handling if handle does not exist

>>>>>>> 72acf154274383cdf77a6b0d248cac6214d51914
