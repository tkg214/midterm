
exports.seed = function(knex, Promise) {
  return knex('posts')
    .then(function () {
      return Promise.all([
        knex('posts').insert({user_id: 1, content: 'Cool Vid!', url_ref: 'https://www.youtube.com/watch?v=mht-1c4wc0Q', post_date: new Date()}),
        knex('posts').insert({user_id: 1, content: 'Interesting Pic', url_ref: 'http://www.spacetelescope.org/static/archives/images/screen/hubble_earth_sp01.jpg', post_date: new Date()}),
        knex('posts').insert({user_id: 2, content: 'Awesome!!', url_ref: 'https://www.youtube.com/watch?v=tafGL02EUOA', post_date: new Date()})
      ]);
    });
};
