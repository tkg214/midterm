
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users');
    table.string('content');
    table.string('url_ref');
    table.date('post_date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};