
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.string('handle');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users').dropColumn('handle');
};
