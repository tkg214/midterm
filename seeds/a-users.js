exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function () {
      return Promise.all([
        knex('users').insert({ first_name: 'ermis', last_name: 'cat', email: 'ermis@user.com', handle: 'ermis', register_date: new Date }),
        knex('users').insert({ first_name: 'ken', last_name: 'fotwanty', email: 'ken@user.com', handle: 'ken', register_date: new Date }),
        knex('users').insert({ first_name: 'hans', last_name: 'solo', email: 'hans@user.com', handle: 'hans', register_date: new Date })
      ]);
    });
};
