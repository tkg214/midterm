//LOAD ALL THE POSTS AND THE NEWLY CREATED POST

$(function() {

  const $grid = $('.grid').packery({
    // options
    itemSelector: '.grid-item',
    gutter: 10
  });

  // API request to iframely that responds with embeded media (no error handling yet)
  function getEmbededMedia(url, callback) {
    // can be MD5 hash later--see iframely docs for details
    const api_key = '9a31fa0ea616afd2acb04d';
    $.ajax({
      url: 'http://iframe.ly/api/iframely?url=' + url + '&api_key=' + api_key,
      method: 'GET'
    }).then(function(embededMedia){
      // TODO below is the html for jpg since noone wants to load all videos
      // console.log(embededMedia.links.thumbnail[0].href)
      callback(embededMedia.html);
    });
  }

  // Function creates jQuery object to be used for rendering
  // TODO add if statement to determine heights (take from API key)
  function createPostElement(post, callback) { // group things in order you use them
    getEmbededMedia(post.url, function($media) {
      const $gridItem = $('<div>').addClass('grid-item').attr('id', post.id);
      const $caption = $('<div>').addClass('caption');
      const $title = $('<h3>').text(post.title);
      const $content = $('<p>').text(post.content);
      $gridItem.append($media, $caption.append($title, $content));
      callback($gridItem);
    });
  }

  // Function renders post and prepends each post element
  function renderPosts(posts) {
    for (let post of posts) {
      createPostElement(post, function(post){
        $grid.append(post).packery('appended', post).packery();
      });
    }
  }

  // Function that fetches posts using Ajax get request and then renders posts
  function fetchPosts(route) {
    $.ajax({
      method: 'GET',
      url: route
    }).then(function(posts) {
      renderPosts(posts);
    }).fail(function(err) {
      console.log('error');
    });
  }

  // fetchPosts('/allposts');

  function displayThumbs(button, route) {
    $(document).on('click', button, function(event) {
      event.preventDefault();
      $('.grid-item').remove();
      fetchPosts(route);
    });
  }

  // TODO assess whether my resources button is necessary
  // TODO colour code by adding class argument to create post function
  displayThumbs('#myresources-button', '/user');
  displayThumbs('#all-posts-button', '/allposts');
  displayThumbs('#my-posts-button', '/user');
  displayThumbs('#likes-button', '/userownlikes');

// TODO what about on submit?
  // This handles the Search BOX not needing a submit button, just press ENTER inside.
  $('#search').on('keyup', function(event){
    event.preventDefault();
    event.stopPropagation();
    if(event.keyCode === 13) {
      $('.thumb').remove();
      const search = $(this).val();
      $.ajax({
        method: 'GET',
        url: '/search?search=' + search
      }).then(function(posts) {
        $('#search').val('');
        if (posts.length > 0) {
          renderPosts(posts);
        } else {
          // TODO enter message for no results
        }
      }).fail(function(err) {
        console.log('error');
      });
    }
  });
});
