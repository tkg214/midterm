//LOAD ALL THE POSTS AND THE NEWLY CREATED POST

import EmbedJS from 'embed-js';

const embed = new EmbedJS({
  input : document.getElementById('block')
});

x.render();

// Function creates jQuery object to be used for rendering
function createPostElement(post) { // group things in order you use them
const $post = $('<div>').addClass('col-sm-4 col-md-3');
const $thumb = $('<media>').attr('src', 'http://placehold.it/319x200');
const $caption = $('<div>').addClass('caption');
const $title = $('<h3>').text(post.title);
}

// Function renders tweets and prepends each tweet element
function renderPosts(posts) {
  for (let post of posts) {
    $('.all-tweets').prepend(createTweetElement(post));
  }
}

// Function that fetches tweets using Ajax get request and then renders tweets
function fetchPosts() {
  $.ajax({
    url: '/allposts',
    method: 'GET'
  }).then(function(posts) {
    renderTweets(posts);
  }).fail(function(err) {
    console.log('error');
  });
}

handle
content
url_ref
post_date
