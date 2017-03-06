exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function () {
      return Promise.all([
        knex('users').insert({ first_name: 'user', last_name: 'rocks', email: 'user@user.com', handle: 'user', register_date: new Date })
      ]);
    });
};
