const profileRoute = require('express').Router();

module.exports = function(fn) {

    profileRoute.post('/', (req, res) => {
      if (req.session.userID) {
        const userId = req.session.userID[0].id;
        const newData = {
          newFirstName: req.body.newFirstName,
          newLastName: req.body.newLastName,
          newEmail: req.body.newEmail
        };
        console.log(newData);
        // fn.updateUserProfile(userId, newData, () => {
        //   res.send();
        // });
      }
    });

  return profileRoute;

};
