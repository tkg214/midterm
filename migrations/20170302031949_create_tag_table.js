exports.up = function(knex, Promise) {
  return knex.schema.createTable('tag', (table) => {
    table.increments();
    table.string('tag');
    table.integer('post_id').references('id').inTable('posts');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tag');
};
