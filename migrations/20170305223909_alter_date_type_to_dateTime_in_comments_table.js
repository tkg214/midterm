
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('comments', (table) => {
    table.dateTime('date').alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('comments', (table) => {
    table.date('date').alter();
  });
};
