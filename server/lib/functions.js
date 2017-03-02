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
      url: data.url,
      title: data.title,
      content: data.description,
      //handle: data.handle,
      //tag: data.tag
    }).into('posts').then(done);
  },

  getUrls: (callback) => {
    knex.select('url').from('posts').then((result) => {
      callback(result);
    });
  },

// HOW TO USE checkDupedURL, place the commented code in another file to run the check.
    // fn.checkDupedURL(req.body.url, function(isDuped){
    //   console.log(isDuped);
    // });

  checkDupedURL: (matchurl, callback) => {
    knex.raw(`SELECT url FROM posts WHERE url = '${matchurl}';`).then((result) => {
      if (result.rowCount === 1)
        callback(result);
    });
  }
};