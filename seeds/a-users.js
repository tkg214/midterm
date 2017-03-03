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
        knex('users').insert({ first_name: 'david', last_name: 'johnes', email: 'david@user.com', handle: 'locker', register_date: new Date })
      ]);
    });
};
