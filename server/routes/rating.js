const ratingRoute  = require('express').Router();

module.exports = function(fn) {

  ratingRoute.post('/', (req, res) => {
    let ratingNum = req.body.rating;
    let postID = req.body.postid;
    let userID = req.session.userID[0].id;
    fn.incRating(postID, userID, ratingNum, (rating) => {
      let data = {
        postid: rating.rows[0].post_id,
        myRating: rating.rows[0].avg_rating
      };
      res.send(data);
      return;
    });
  });
  return ratingRoute;
};
