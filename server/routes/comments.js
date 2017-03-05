const commentsRoute = require('express').Router();

module.exports = function(fn) {

  //Create a new comment in db,
  //return the newly created comment to that post
  //along with the post id, comment content commenter's user id, handle,
  commentsRoute.post('/', (req, res) => {
    const postID = 1;//req.body.postid;
    const userID = req.session.userID[0].id;
    const content = 'test content';//req.body.content;
    const comment = {
      postID: postID,
      userID: userID,
      content: content
    };
    fn.createComment(comment, (data) => {
      const allComments = data.rows;
      console.log(allComments);
      res.send(allComments);
      return;
    });
  });

  return commentsRoute;
};

// Value being returned looks like this
// { postID: '1',
//   userID: 10,
//   content: 'test almost there',
//   handle: 'locker' }
