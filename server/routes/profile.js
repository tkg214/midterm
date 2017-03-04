const profileRoute = require('express').Router();

module.exports = function(fn) {

    profileRoute.put('/', (req, res) => {
      if (req.session.userID) {
        const userId = req.session.userID;
        const newData = {
          newFirstName: req.body.newFirstName,
          newLastName: req.body.newLastName,
          newEmail: req.body.newEmail
        };
        fn.updateUserProfile(userId, newData, () => {
          res.send();
        });
      }
    });

  return profileRoute;

};
