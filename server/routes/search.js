const searchRoute = require('express').Router();

module.exports = (fn) => {
  searchRoute.get('/', (req, res) => {
    // search posts for related content.
    const val = req.query.search;
    fn.getSearchDataFromPosts(val, (postIdArray) => {
      const ids = [];
      postIdArray.forEach( (id) => {
        ids.push(Number(id));
      });
      // TODO this doesnt work anymore, returns empty array
      fn.getPostsbyPostIdArray(ids, (posts) => {
        res.send(posts);
      });
    });
  });
  return searchRoute;
};
