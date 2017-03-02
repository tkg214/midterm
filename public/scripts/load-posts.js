//LOAD ALL THE POSTS AND THE NEWLY CREATED POST

$(function() {


  // API request to iframely that responds with embeded media (no error handling yet)
  function getEmbededMedia(url, callback) {
    // can be MD5 hash later--see iframely docs for details
    const api_key = '9a31fa0ea616afd2acb04d';
    $.ajax({
      url: 'http://iframe.ly/api/iframely?url=' + url + '&api_key=' + api_key,
      method: 'GET'
    }).then(function(embededMedia){
      callback(embededMedia.html);
    });
  }

  // Function creates jQuery object to be used for rendering
  function createPostElement(post, callback) { // group things in order you use them
    getEmbededMedia(post.url, function($media) {
      const $row = $('<div>').addClass('row');
      const $post = $('<div>').addClass('col-sm-4 col-md-3');
      const $thumb = $('<div>').addClass('thumbnail');
      const $caption = $('<div>').addClass('caption');
      const $title = $('<h3>').text(post.title);
      const $content = $('<p>').text(post.content);
      $post.append($thumb.append($media, $caption.append($title, $content)));
      $row.append($post);
      callback($row);
    });
  }

  // Function renders tweets and prepends each tweet element
  function renderPosts(posts) {
    // use forEach when refactoring
    for (let post of posts) {
      createPostElement(post, function(post){
        $('.all-posts').prepend(post);
      });
    }
  }

  // Function that fetches tweets using Ajax get request and then renders tweets
  function fetchPosts() {
    $.ajax({
      url: '/allposts',
      method: 'GET'
    }).then(function(posts) {
      renderPosts(posts);
    }).fail(function(err) {
      console.log('error');
    });
  }

  fetchPosts();

});