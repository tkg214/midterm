const likesRoute  = require('express').Router();

module.exports = function(fn) {

  likesRoute.post('/', (req, res, callback) => {
    if(req.body.postid & req.body.like){
      let postID = req.body.postid;
      let userID = req.session.userID[0].id;
      fn.incLikes(postID, userID, (likes) => {
        res.send(likes);
      });

    } else {
      fn.getLikes(req.body.postid, (likes) => {
        res.send(likes);
        return;
      });
    }

  });
  return likesRoute;
};