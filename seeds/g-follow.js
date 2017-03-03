exports.seed = function(knex, Promise) {
  return knex('follow')
    .then(function () {
      return Promise.all([
        knex('follow').insert({ user_id: 1, follower_id: 1 }),
        knex('follow').insert({ user_id: 1, follower_id: 2 }),
        knex('follow').insert({ user_id: 1, follower_id: 3 }),
        knex('follow').insert({ user_id: 1, follower_id: 4 }),
        knex('follow').insert({ user_id: 4, follower_id: 5 }),
        knex('follow').insert({ user_id: 4, follower_id: 6 }),
        knex('follow').insert({ user_id: 2, follower_id: 7 }),
        knex('follow').insert({ user_id: 2, follower_id: 8 }),
        knex('follow').insert({ user_id: 2, follower_id: 9 }),
        knex('follow').insert({ user_id: 2, follower_id: 10 }),
        knex('follow').insert({ user_id: 1, follower_id: 11 }),
        knex('follow').insert({ user_id: 1, follower_id: 12 }),
        knex('follow').insert({ user_id: 1, follower_id: 13 }),
        knex('follow').insert({ user_id: 1, follower_id: 14 }),
        knex('follow').insert({ user_id: 6, follower_id: 15 })
      ]);
    });
};