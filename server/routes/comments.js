const commentsRoute = require('express').Router();

module.exports = function(fn) {

  //Create a new comment in db,
  //return the newly created comment to that post
  //along with the post id, comment content commenter's user id, handle,
  commentsRoute.post('/', (req, res) => {
    const postID = req.body.postId;
    const userID = req.session.userID[0].id;
    const content = req.body.commentContent;
    const comment = {
      postID: postID,
      userID: userID,
      content: content
    };
    console.log('before fucntion', comment);
    fn.createComment(comment, (handles) => {
      comment.userHandle = handles[0].handle;
      //console.log('after function', comment);
      res.send(comment);
      return;
    });
  });

  return commentsRoute;
};
