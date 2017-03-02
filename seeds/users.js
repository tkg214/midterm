exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function () {
      return Promise.all([
        knex('users').insert({ first_name: 'ken', last_name: 'rocks', email: 'ken@user.com', handle: 'kdawg', register_date: new Date }),
        knex('users').insert({ first_name: 'hans', last_name: 'bans', email: 'bans@user.com', handle: 'hanzie', register_date: new Date }),
        knex('users').insert({ first_name: 'ermis', last_name: 'hermes', email: 'hermes@user.com', handle: 'hermos', register_date: new Date }),
        knex('users').insert({ first_name: 'chuck', last_name: 'luck', email: 'chuck@user.com', handle: 'chucky', register_date: new Date }),
        knex('users').insert({ first_name: 'adrien', last_name: 'madrien', email: 'adrien@user.com', handle: 'rocky', register_date: new Date }),
        knex('users').insert({ first_name: 'nate', last_name: 'baite', email: 'nate@user.com', handle: 'dog', register_date: new Date }),
        knex('users').insert({ first_name: 'nima', last_name: 'sheema', email: 'nima@user.com', handle: 'dory', register_date: new Date }),
        knex('users').insert({ first_name: 'don', last_name: 'jon', email: 'don@user.com', handle: 'bonbon', register_date: new Date }),
        knex('users').insert({ first_name: 'joel', last_name: 'billy', email: 'joel@user.com', handle: 'fire', register_date: new Date }),
        knex('users').insert({ first_name: 'david', last_name: 'johnes', email: 'david@user.com', handle: 'locker', register_date: new Date }),
      ]);
    });
};

exports.seed = function(knex, Promise) {
  return knex('posts')
    .then(function () {
      return Promise.all([
        knex('posts').insert({ user_id: 7, content: 'Cool Vid!', url_ref: 'https://www.youtube.com/watch?v=mht-1c4wc0Q', post_date: new Date, title: 'Insane Video!' }),
        knex('posts').insert({ user_id: 7, content: 'Interesting Pic', url_ref: 'http://www.spacetelescope.org/static/archives/images/screen/hubble_earth_sp01.jpg', post_date: new Date, title: 'Space Picture!' }),
        knex('posts').insert({ user_id: 7, content: 'Awesome!!', url_ref: 'https://github.com/opt1x', post_date: new Date, title: 'Opt1x Github!' }),
        knex('posts').insert({ user_id: 7, content: 'reqbody empty', url_ref: 'http://stackoverflow.com/questions/24543847/req-body-empty-on-posts', post_date: new Date, title: 'Stack req.body.empty issue' }),
        knex('posts').insert({ user_id: 7, content: 'nav bar', url_ref: 'https://getbootstrap.com/', post_date: new Date, title: 'Bootstrap - NavBar' }),
        knex('posts').insert({ user_id: 8, content: 'npm search', url_ref: 'https://www.npmjs.com/search?q=likes', post_date: new Date, title: 'Npm Popular Search' }),
        knex('posts').insert({ user_id: 8, content: 'tunnel vision song', url_ref: 'https://soundcloud.com/kodak-black/tunnel-vision-1', post_date: new Date, title: 'Tunnel Vision' }),
        knex('posts').insert({ user_id: 8, content: 'the king dreads', url_ref: 'https://soundcloud.com/theking303/thekingdreads-in-my-zone-prod-by-thebeatplug', post_date: new Date, title: 'Song: in my zone' }),
        knex('posts').insert({ user_id: 8, content: 'sick song!', url_ref: 'https://soundcloud.com/feelthatshit/lil-uzi-vert-xo-tour-life-all-my-friends-are-dead', post_date: new Date, title: 'Sick Music, all my friends' }),
        knex('posts').insert({ user_id: 10, content: 'montage late night', url_ref: 'https://soundcloud.com/airlinejay/late-night-prod-by-montage', post_date: new Date, title: 'Montage - Late Night' }),
        knex('posts').insert({ user_id: 10, content: 'rap freestyle', url_ref: 'https://www.youtube.com/watch?v=Ms8d6kvz5ig', post_date: new Date, title: 'Rap Freestyle' }),
        knex('posts').insert({ user_id: 10, content: 'freestyle 2', url_ref: 'https://www.youtube.com/watch?v=5tCuX2uJIZA', post_date: new Date, title: 'Rap Freestyle #2' }),
        knex('posts').insert({ user_id: 10, content: 'frestyle 3', url_ref: 'https://www.youtube.com/watch?v=PXYL3MpP54M', post_date: new Date, title: 'Rap Freestyle #3' }),
        knex('posts').insert({ user_id: 9, content: 'freestyle 4', url_ref: 'https://www.youtube.com/watch?v=oqUIN4-IdgE', post_date: new Date, title: 'Rap Freestyle #4' }),
        knex('posts').insert({ user_id: 9, content: 'freestyle 5', url_ref: 'https://www.youtube.com/watch?v=-Lo4embhBxM', post_date: new Date, title: 'Rap Freestyle #5' }),
        knex('posts').insert({ user_id: 9, content: 'freeeeeestyle 6', url_ref: 'https://www.youtube.com/watch?v=nK71QW_yjWY', post_date: new Date, title: 'Rap Freestyle #6' })
      ]);
    });
};

exports.seed = function(knex, Promise) {
  return knex('tag')
    .then(function () {
      return Promise.all([
        knex.('tag').insert({ name: 'Video', post_id: 1 }),
        knex.('tag').insert({ name: 'Picture', post_id: 2 }),
        knex.('tag').insert({ name: 'Text', post_id: 3 }),
        knex.('tag').insert({ name: 'Text', post_id: 4 }),
        knex.('tag').insert({ name: 'Text', post_id: 5 }),
        knex.('tag').insert({ name: 'Text', post_id: 6 }),
        knex.('tag').insert({ name: 'Music', post_id: 7 }),
        knex.('tag').insert({ name: 'Music', post_id: 8 }),
        knex.('tag').insert({ name: 'Music', post_id: 9 }),
        knex.('tag').insert({ name: 'Music', post_id: 10 }),
        knex.('tag').insert({ name: 'Video', post_id: 11 }),
        knex.('tag').insert({ name: 'Video', post_id: 12 }),
        knex.('tag').insert({ name: 'Video', post_id: 13 }),
        knex.('tag').insert({ name: 'Video', post_id: 14 }),
        knex.('tag').insert({ name: 'Video', post_id: 15 }),
        knex.('tag').insert({ name: 'Video', post_id: 16 }),
        knex.('tag').insert({ name: 'Video', post_id: 17 }),
      ]);
    });
};