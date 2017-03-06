const categoriesRoute = require('express').Router();

module.exports = (fn) => {

  categoriesRoute.get('/', (req, res) => {
    const tag = req.query.tag;
    fn.getPostsByTag(tag, (postIdArray) => {
      const ids = [];
      postIdArray.rows.forEach( (id) => {
        ids.push(id.post_id);
      });
      fn.getPostsbyPostIdArray(ids, (posts) => {
        res.send(posts);
      });
    });
  });

  return categoriesRoute;

};
