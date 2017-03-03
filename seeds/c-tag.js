exports.seed = function(knex, Promise) {
  return knex('tag')
    .then(function () {
      return Promise.all([
        knex('tag').insert({ tag: 'Video', post_id: 1 }),
        knex('tag').insert({ tag: 'Picture', post_id: 2 }),
        knex('tag').insert({ tag: 'Text', post_id: 3 }),
        knex('tag').insert({ tag: 'Text', post_id: 4 }),
        knex('tag').insert({ tag: 'Text', post_id: 5 }),
        knex('tag').insert({ tag: 'Text', post_id: 6 }),
        knex('tag').insert({ tag: 'Music', post_id: 7 }),
        knex('tag').insert({ tag: 'Music', post_id: 8 }),
        knex('tag').insert({ tag: 'Music', post_id: 9 }),
        knex('tag').insert({ tag: 'Music', post_id: 10 }),
        knex('tag').insert({ tag: 'Video', post_id: 11 }),
        knex('tag').insert({ tag: 'Video', post_id: 12 }),
        knex('tag').insert({ tag: 'Video', post_id: 13 }),
        knex('tag').insert({ tag: 'Video', post_id: 14 }),
        knex('tag').insert({ tag: 'Video', post_id: 15 }),
        knex('tag').insert({ tag: 'Video', post_id: 16 })
      ]);
    });
};