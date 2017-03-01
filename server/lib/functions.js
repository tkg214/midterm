"use strict";

module.exports = {
// OLD EXAMPLE FUNCTIONS (saveTweet and getTweets)
  
  savePost: (newTweet, callback) => {
    // knex.insert() store new post
    callback(null, true);
  },
  
  getPosts: (callback) => {
    // callback(null, knex.select...find related posts);
  }
};