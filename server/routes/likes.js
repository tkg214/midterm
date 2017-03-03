const likesRoute  = require('express').Router();

module.exports = function(fn) {

  likesRoute.post('/', (req, res, callback) => {
    if(req.body.postid){
      let postID = req.body.postid;
      let userID = req.session.userID[0].id;
      fn.getUsersLikes(postID, (users) => {
        users.rows.forEach((id) => {
          if (id.user_id === userID){
            fn.delUserLikes(postID, userID, () => {
              fn.getLikes(postID, (likes) => {
                // res.send(likes);
                callback();
              });
            });
          }
        });
        // fn.incUserLikes(postID, userID, () => {
        //   fn.getLikes(postID, (likes) => {
        //     res.send(likes);
        //     return;
        //   });
        // });
        // return;
      });
    }
    if(!req.body.userID) {
      fn.getLikes(req.body.postid, (likes) => {
        res.send(likes);
      });
    }

  });
  return likesRoute;
};