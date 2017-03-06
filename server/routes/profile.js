const profileRoute = require('express').Router();

module.exports = function(fn) {

    profileRoute.put('/', (req, res) => {
      console.log('in update route');
      if (req.session.userID) {
        const userId = req.session.userID[0].id;
        const newData = {
          newFirstName: req.body.newFirstName,
          newLastName: req.body.newLastName,
          newEmail: req.body.newEmail
        };
        fn.updateUserProfile(userId, newData, (newProfile) => {
          res.send();
        });
      }
    });

  return profileRoute;

};
