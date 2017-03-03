//ratings
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', (table) => {
    table.increments();
    table.integer('rating');
    table.integer('user_id').references('id').inTable('users');
    table.integer('post_id').references('id').inTable('posts');
    table.date('date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ratings');
};