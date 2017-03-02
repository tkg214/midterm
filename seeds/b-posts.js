exports.seed = function(knex, Promise) {
  return knex('posts')
    .then(function () {
      return Promise.all([
        knex('posts').insert({ user_id: 7, content: 'Cool Vid!', url: 'https://www.youtube.com/watch?v=mht-1c4wc0Q', post_date: new Date, title: 'Insane Video!' }),
        knex('posts').insert({ user_id: 7, content: 'Interesting Pic', url: 'http://www.spacetelescope.org/static/archives/images/screen/hubble_earth_sp01.jpg', post_date: new Date, title: 'Space Picture!' }),
        knex('posts').insert({ user_id: 7, content: 'Awesome!!', url: 'https://github.com/opt1x', post_date: new Date, title: 'Opt1x Github!' }),
        knex('posts').insert({ user_id: 7, content: 'reqbody empty', url: 'http://stackoverflow.com/questions/24543847/req-body-empty-on-posts', post_date: new Date, title: 'Stack req.body.empty issue' }),
        knex('posts').insert({ user_id: 7, content: 'nav bar', url: 'https://getbootstrap.com/', post_date: new Date, title: 'Bootstrap - NavBar' }),
        knex('posts').insert({ user_id: 8, content: 'npm search', url: 'https://www.npmjs.com/search?q=likes', post_date: new Date, title: 'Npm Popular Search' }),
        knex('posts').insert({ user_id: 8, content: 'tunnel vision song', url: 'https://soundcloud.com/kodak-black/tunnel-vision-1', post_date: new Date, title: 'Tunnel Vision' }),
        knex('posts').insert({ user_id: 8, content: 'the king dreads', url: 'https://soundcloud.com/theking303/thekingdreads-in-my-zone-prod-by-thebeatplug', post_date: new Date, title: 'Song: in my zone' }),
        knex('posts').insert({ user_id: 8, content: 'sick song!', url: 'https://soundcloud.com/feelthatshit/lil-uzi-vert-xo-tour-life-all-my-friends-are-dead', post_date: new Date, title: 'Sick Music, all my friends' }),
        knex('posts').insert({ user_id: 10, content: 'montage late night', url: 'https://soundcloud.com/airlinejay/late-night-prod-by-montage', post_date: new Date, title: 'Montage - Late Night' }),
        knex('posts').insert({ user_id: 10, content: 'rap freestyle', url: 'https://www.youtube.com/watch?v=Ms8d6kvz5ig', post_date: new Date, title: 'Rap Freestyle' }),
        knex('posts').insert({ user_id: 10, content: 'freestyle 2', url: 'https://www.youtube.com/watch?v=5tCuX2uJIZA', post_date: new Date, title: 'Rap Freestyle #2' }),
        knex('posts').insert({ user_id: 10, content: 'frestyle 3', url: 'https://www.youtube.com/watch?v=PXYL3MpP54M', post_date: new Date, title: 'Rap Freestyle #3' }),
        knex('posts').insert({ user_id: 9, content: 'freestyle 4', url: 'https://www.youtube.com/watch?v=oqUIN4-IdgE', post_date: new Date, title: 'Rap Freestyle #4' }),
        knex('posts').insert({ user_id: 9, content: 'freestyle 5', url: 'https://www.youtube.com/watch?v=-Lo4embhBxM', post_date: new Date, title: 'Rap Freestyle #5' }),
        knex('posts').insert({ user_id: 9, content: 'freeeeeestyle 6', url: 'https://www.youtube.com/watch?v=nK71QW_yjWY', post_date: new Date, title: 'Rap Freestyle #6' })
      ]);
    });
};