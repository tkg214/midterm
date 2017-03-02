// FULLY WORKING, DO NOT TOUCH
// With functions.js fn.findUser function.
// Tested with POSTMAN - Ermis

const loginRoute  = require('express').Router();

module.exports = function(fn) {

  loginRoute.post('/', (req, res) => {
    let result = fn.checkDupedURL(req.body.url, fn.retFunc);
    console.log(result);

    if(req.session.userID){
      res.redirect(301, '/');
      return;
    }
    let user = req.body.handle;

    fn.findUser(user, (id) => {
      req.session.userID = id;
      res.redirect(200, '/');
    });
  });

  return loginRoute;

};
