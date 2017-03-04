const commentsRoute = require('express').Router();

module.exports = function(fn) {

  //Create a new comment in db, and return the new comment to that post
  commentsRoute.post('/', (req, res) => {
    const postId = req.body.postId;
    const userId = req.session.userID;
    const content = req.body.content;
    const comment = {
      postId: postId,
      userId: userId,
      content: content
    };
    fn.createComment(comment, (ids) => {
      comment.id = ids[0];
      res.status(201).json(comment);
    });
  });

  return commentsRoute;
};
