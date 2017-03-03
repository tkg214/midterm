const commentsRoute = require('express').Router();

module.exports = function(fn) {

  //Create a new comment in db
  commentsRoute.post('/', (req, res) => {
    const postId = req.body.postId;
    const userId = req.session.userID;
    const content = req.body.content;
    fn.createComment({
      postId: postId,
      userId: userId,
      content: content
    }, () => {
      res.status(201).send();
    });
  });

  //Get comments by Post ID
  commentsRoute.get('/', (req, res) => {
    const postId = req.query.postId;
    console.log(postId);
    fn.getComments(postId, (comments) => {
      console.log(comments);
      res.send(comments);
    });
  });

  return commentsRoute;
};
