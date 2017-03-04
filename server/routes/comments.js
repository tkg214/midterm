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
    fn.createComment(comment, (handles) => {
      comment.userHandle = handles[0].handle;
      res.send(comment);
      return;
      // Value being returned looks like this
      // { postID: '1',
      //   userID: 10,
      //   content: 'test almost there',
      //   userHandle: 'locker' }
    });
  });

  return commentsRoute;
};
