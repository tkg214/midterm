
exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function () {
      return Promise.all([
        knex('users').insert({email: 'ken@user.com', first_name: 'Ken'}),
        knex('users').insert({email: 'ermis@user.com', first_name: 'Ermis'}),
        knex('users').insert({email: 'hans@user.com', first_name: 'Hans'})
      ]);
    });
};
