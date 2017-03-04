const searchRoute = require('express').Router();

module.exports = (fn) => {
  searchRoute.get('/', (req, res) => {
    // search posts for related content.
    const val = req.query.search;
    fn.getSearchDataFromPosts(val, (postsArray) => {
      res.send(postsArray);
    });
  });
  return searchRoute;
};