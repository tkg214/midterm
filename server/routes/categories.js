const categoriesRoute = require('express').Router();

module.exports = (fn) => {
  categoriesRoute.get('/', (req, res) => {
    const tag = req.query.tag;
    console.log(tag)
    fn.getPostsByTag(tag, (results) => {
      console.log(results.rows);
    });
  });

  return categoriesRoute;

};
