"use strict";

const settings = require('./knexsettings.json');
const knex = require('knex')(settings);

module.exports = {

  // TODO: MAKE SURE CALLBACKS ETC ARE CHANGED BELOW
  getAllPosts: (done) => {
    knex.select().from('posts').then(done);
  },

// Working, DO NOT TOUCH
  createUser: (user, done) => {
    knex.insert({
      'first_name': user.firstName,
      'last_name': user.lastName,
      'email': user.email,
      'register_date': new Date,
      'handle': user.handle
      // TODO: password storage
    }).into('users').then(done);
  },

// WORKING, DO NOT TOUCH
  findUser: (user, done) => {
    knex.select('id').from('users').where({
      handle: user
    }).then(done);
  },

// Provide req.session.userID and return the username (handle)
  findUserById: (id, done) => {
    knex.select('handle').from('users').where({
      'id': id
    }).then(done);
  },

  getAllPostsForUser: (user, done) => {
    knex.select().from('posts').where({
      user_id: user
      // TODO: IS user_id properly stored in db?
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
