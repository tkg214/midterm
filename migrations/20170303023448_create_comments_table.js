// comments
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.string('content');
    table.integer('user_id').references('id').inTable('users');
    table.integer('post_id').references('id').inTable('posts');
    table.date('date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};