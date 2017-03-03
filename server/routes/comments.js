const commentsRoute = require('express').Router();

module.exports = function(fn) {

  commentsRoute.post('/', (req, res) => {
    if (req.session.userID) {
      const postId = req.body.postId;
      fn.getComments(postId, (comments) => {
          res.send(comments);
        });
    } else {
      res.redirect('/login');
      return;
    }
  });

  return commentsRoute;
};
