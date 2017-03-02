
exports.seed = function(knex, Promise) {
  return knex('posts')
    .then(function () {
      return Promise.all([
        knex('posts').insert({user_id: 7, content: 'Cool Vid!', url_ref: 'https://www.youtube.com/watch?v=mht-1c4wc0Q', post_date: new Date}),
        knex('posts').insert({user_id: 7, content: 'Interesting Pic', url_ref: 'http://www.spacetelescope.org/static/archives/images/screen/hubble_earth_sp01.jpg', post_date: new Date}),
        knex('posts').insert({user_id: 7, content: 'Awesome!!', url_ref: 'https://github.com/opt1x', post_date: new Date}),
        knex('posts').insert({user_id: 7, content: 'reqbody empty', url_ref: 'http://stackoverflow.com/questions/24543847/req-body-empty-on-posts', post_date: new Date}),
        knex('posts').insert({user_id: 7, content: 'nav bar', url_ref: 'https://getbootstrap.com/components/#navbar', post_date: new Date}),
        knex('posts').insert({user_id: 8, content: 'npm search', url_ref: 'https://www.npmjs.com/search?q=likes', post_date: new Date}),
        knex('posts').insert({user_id: 8, content: 'tunnel vision song', url_ref: 'https://soundcloud.com/kodak-black/tunnel-vision-1', post_date: new Date}),
        knex('posts').insert({user_id: 8, content: 'the king dreads', url_ref: 'https://soundcloud.com/theking303/thekingdreads-in-my-zone-prod-by-thebeatplug', post_date: new Date}),
        knex('posts').insert({user_id: 8, content: 'sick song!', url_ref: 'https://soundcloud.com/feelthatshit/lil-uzi-vert-xo-tour-life-all-my-friends-are-dead', post_date: new Date}),
        knex('posts').insert({user_id: 10, content: 'montage late night', url_ref: 'https://soundcloud.com/airlinejay/late-night-prod-by-montage', post_date: new Date}),
        knex('posts').insert({user_id: 10, content: 'rap freestyle', url_ref: 'https://www.youtube.com/watch?v=Ms8d6kvz5ig', post_date: new Date}),
        knex('posts').insert({user_id: 10, content: 'freestyle 2', url_ref: 'https://www.youtube.com/watch?v=5tCuX2uJIZA', post_date: new Date}),
        knex('posts').insert({user_id: 10, content: 'frestyle 3', url_ref: 'https://www.youtube.com/watch?v=PXYL3MpP54M', post_date: new Date}),
        knex('posts').insert({user_id: 9, content: 'freestyle 4', url_ref: 'https://www.youtube.com/watch?v=oqUIN4-IdgE', post_date: new Date}),
        knex('posts').insert({user_id: 9, content: 'freestyle 5', url_ref: 'https://www.youtube.com/watch?v=-Lo4embhBxM', post_date: new Date}),
        knex('posts').insert({user_id: 9, content: 'freeeeeestyle 6', url_ref: 'https://www.youtube.com/watch?v=nK71QW_yjWY', post_date: new Date})
      ]);
    });
};
