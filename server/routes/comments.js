const commentsRoute = require('express').Router();

module.exports = function(fn) {

  //Create a new comment in db, and return the new comment to that post
  commentsRoute.post('/', (req, res) => {
    const postID = req.body.postid;
    const userID = req.session.userID[0].id;
    const content = req.body.content;
    const comment = {
      postID: postID,
      userID: userID,
      content: content
    };
    console.log(comment);
    fn.createComment(comment, (ids) => {
      res.send(comment);
      return;
    });
  });

  return commentsRoute;
};
