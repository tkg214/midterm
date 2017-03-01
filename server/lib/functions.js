"use strict";

const settings = require('./knexsettings.json');
const knex = require('knex')(settings);

module.exports = {

  // TODO MAKE SURE CALLBACKS ETC ARE CHANGED BELOW
  getAllPosts: (done) => {
    knex.select().from('posts').then(done);
  },

  createUser: (handle, done) => {
    console.log(handle);
    knex.insert({
      'handle': handle
      // TODO register date and password storage
    }).into('users').then(done);
  },

  findUser: (email, done) => {
    knex.select().from('users').where({
      email: email
      // TODO password and error handling if id and password query do not match (error handling)
    }).then(done);
  },

  getAllPostsForUser: (user, done) => {
    knex.select().from('posts').where({
      user_id: user
      // TODO IS user_id properly stored in db?
    }).then(done);
  },

  createPost: (data, done) => {
    knex.insert({
      // ENTER
    }).into('posts').then(done);
  },

  updatePost: (post, done) => {
    knex('posts').where({
      // ENTER
    }).update({
      // ENTER
    }).then(done);
  },

  deletePost: (post, done) => {
    knex('posts').where({
      // ENTER
    }).del().then(done);
  }
};
