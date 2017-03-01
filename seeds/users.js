
exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function () {
      return Promise.all([
        knex('users').insert({first_name: 'ken', last_name: 'rocks', email: 'ken@user.com', handle: 'kdawg'}),
        knex('users').insert({first_name: 'hans', last_name: 'bans', email: 'bans@user.com', handle: 'hanzie'}),
        knex('users').insert({first_name: 'ermis', last_name: 'hermes', email: 'hermes@user.com', handle: 'hermos'}),
        knex('users').insert({first_name: 'chuck', last_name: 'luck', email: 'chuck@user.com', handle: 'chucky'}),
        knex('users').insert({first_name: 'adrien', last_name: 'madrien', email: 'adrien@user.com', handle: 'rocky'}),
        knex('users').insert({first_name: 'nate', last_name: 'baite', email: 'nate@user.com', handle: 'dog'}),
        knex('users').insert({first_name: 'nima', last_name: 'sheema', email: 'nima@user.com', handle: 'dory'}),
        knex('users').insert({first_name: 'don', last_name: 'jon', email: 'don@user.com', handle: 'bonbon'}),
        knex('users').insert({first_name: 'joel', last_name: 'billy', email: 'joel@user.com', handle: 'fire'}),
        knex('users').insert({first_name: 'david', last_name: 'johnes', email: 'david@user.com', handle: 'locker'}),
      ]);
    });
};
