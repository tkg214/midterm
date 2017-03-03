exports.seed = function(knex, Promise) {
  return knex('ratings')
    .then(function () {
      return Promise.all([
        knex('ratings').insert({ rating: 1, user_id: 1, post_id: 1, date: new Date }),
        knex('ratings').insert({ rating: 5, user_id: 1, post_id: 2, date: new Date }),
        knex('ratings').insert({ rating: 4, user_id: 1, post_id: 3, date: new Date }),
        knex('ratings').insert({ rating: 6, user_id: 1, post_id: 4, date: new Date }),
        knex('ratings').insert({ rating: 3, user_id: 4, post_id: 5, date: new Date }),
        knex('ratings').insert({ rating: 1, user_id: 4, post_id: 6, date: new Date }),
        knex('ratings').insert({ rating: 2, user_id: 2, post_id: 7, date: new Date }),
        knex('ratings').insert({ rating: 9, user_id: 2, post_id: 8, date: new Date }),
        knex('ratings').insert({ rating: 56, user_id: 2, post_id: 9, date: new Date }),
        knex('ratings').insert({ rating: 3, user_id: 2, post_id: 10, date: new Date }),
        knex('ratings').insert({ rating: 3, user_id: 1, post_id: 11, date: new Date }),
        knex('ratings').insert({ rating: 45, user_id: 1, post_id: 12, date: new Date }),
        knex('ratings').insert({ rating: 3, user_id: 1, post_id: 13, date: new Date }),
        knex('ratings').insert({ rating: 2, user_id: 1, post_id: 14, date: new Date }),
        knex('ratings').insert({ rating: 5, user_id: 6, post_id: 15, date: new Date }),
        knex('ratings').insert({ rating: 7, user_id: 7, post_id: 16, date: new Date })
      ]);
    });
};