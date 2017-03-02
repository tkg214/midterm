
exports.up = function(knex, Promise) {
  return knex.raw('ALTER TABLE posts RENAME COLUMN url_ref TO url;');
};

exports.down = function(knex, Promise) {
  return knex.raw('ALTER TABLE posts RENAME COLUMN url TO url_ref;');
};