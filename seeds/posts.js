
exports.seed = function(knex, Promise) {
  return knex('posts')
    .then(function () {
      return Promise.all([
        knex('posts').insert({user_id: 7, content: 'Cool Vid!', url: 'https://www.youtube.com/watch?v=mht-1c4wc0Q', post_date: new Date}),
        knex('posts').insert({user_id: 7, content: 'Interesting Pic', url: 'http://www.spacetelescope.org/static/archives/images/screen/hubble_earth_sp01.jpg', post_date: new Date}),
        knex('posts').insert({user_id: 8, content: 'the king dreads', url: 'https://soundcloud.com/theking303/thekingdreads-in-my-zone-prod-by-thebeatplug', post_date: new Date}),
        knex('posts').insert({user_id: 8, content: 'sick song!', url: 'https://soundcloud.com/feelthatshit/lil-uzi-vert-xo-tour-life-all-my-friends-are-dead', post_date: new Date}),
        knex('posts').insert({user_id: 10, content: 'montage late night', url: 'https://soundcloud.com/airlinejay/late-night-prod-by-montage', post_date: new Date}),
        knex('posts').insert({user_id: 10, content: 'freestyle 2', url: 'https://www.youtube.com/watch?v=5tCuX2uJIZA', post_date: new Date}),
        knex('posts').insert({user_id: 9, content: 'freestyle 4', url: 'https://www.youtube.com/watch?v=oqUIN4-IdgE', post_date: new Date}),
        knex('posts').insert({user_id: 9, content: 'freeeeeestyle 6', url: 'https://www.youtube.com/watch?v=nK71QW_yjWY', post_date: new Date})
      ]);
    });
};
