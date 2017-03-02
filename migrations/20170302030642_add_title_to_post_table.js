exports.up = function(knex, Promise) {
  return knex.schema.table('posts', (table) => {
    table.string('title');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts').dropColumn('title');
};
