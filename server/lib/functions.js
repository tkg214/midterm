"use strict";

const settings = require('./knexsettings.json');
const knex = require('knex')(settings);

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = {

  // TODO MAKE SURE CALLBACKS ETC ARE CHANGED BELOW
  getAllPosts: (done) => {
    knex.select().from('posts').then(done);
  },
  getAllPostsForUser: (user, done) => {
    knex.select().from('posts').where({
      user_id: user
    }).then(done);
  },
  createPost: (data, done) => {
    knex.insert({
      // ENTER
    }).into('posts').then(done);
  },
  updatePost: (     ) => {
    knex('posts').where({
      // ENTER
    }).update({
      // ENTER
    }).then(done);
  },
  deletePost: (    ) => {
    knex('posts').where({
      // ENTER
    }).del().then(done);
  }
};
