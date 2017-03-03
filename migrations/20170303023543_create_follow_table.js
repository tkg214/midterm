// follow
exports.up = function(knex, Promise) {
  return knex.schema.createTable('follow', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users');
    table.integer('follower_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('follow');
};