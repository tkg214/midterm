const ratingRoute  = require('express').Router();

module.exports = function(fn) {

  ratingRoute.get('/', (req, res) => {
    let postID = req.query.postid;
    if(req.query.userid){
      let userID = req.query.userid;
      fn.getUserRating(postID, userID, (rating) => {
        let data = {
          userid: rating.rows[0].user_id,
          postid: rating.rows[0].post_id,
          rating: rating.rows[0].rating
        };
        res.send(data);
        return;
      });
    } else {
      fn.getRating(postID, (rating) => {
        let data = {
          postid: rating.rows[0].post_id,
          avg_rating: rating.rows[0].avg_rating
        };
        res.send(data);
        return;
      });
    }

  });

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
