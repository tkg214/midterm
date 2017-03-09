//LOAD ALL THE POSTS AND THE NEWLY CREATED POST

$(function() {

  const $grid = $('.grid').imagesLoaded(
    function() {
      $('.grid').packery({
        itemSelector: '.grid-item',
        gutter: 10
    });
  });

  // API request to iframely that responds with embeded media (no error handling yet)
  function getEmbededMedia(url, callback) {
    // can be MD5 hash later--see iframely docs for details
    const api_key = '9a31fa0ea616afd2acb04d';
    $.ajax({
      url: 'http://iframe.ly/api/iframely?url=' + url + '&api_key=' + api_key,
      method: 'GET'
    }).then(function(embededMedia){
      console.log(embededMedia);
      callback(embededMedia.links.thumbnail ? embededMedia.links.thumbnail[0].href : 'https://media.giphy.com/media/pf1BPD11ewPjq/giphy.gif');
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
      const $thumbnail = $('<img>').addClass('img-rounded').attr({
        src: $media,
        alt: 'https://media.giphy.com/media/pf1BPD11ewPjq/giphy.gif'
      });
      const postDate = post.post_date.slice(0, 10);
      const $date = $('<h4>').data('post-date', postDate).text(postDate);
      $gridItem.append($thumbnail, $caption.append($title, $content, $date));
      callback($gridItem);
    });
  }

  // Function renders post and prepends each post element
  function renderPosts(posts) {
    let postsSortedByDate = posts.sort(function(a, b) {
      return b.id - a.id
    })
    for (let post of postsSortedByDate) {
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

  fetchPosts('/allposts');

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

  $('#dropdown-categories').on('click', 'li', function(event) {
    event.preventDefault();
    let tag = $(this).find('a').text();
    $.ajax({
      method: 'GET',
      url: '/categories?tag=' + tag
    }).then(function(posts) {
      $('.grid-item').remove();
      renderPosts(posts);
    });
  });


// TODO what about on submit?
  // This handles the Search BOX not needing a submit button, just press ENTER inside.
  $('#search').on('keyup', function(event){
    event.preventDefault();
    event.stopPropagation();
    if(event.keyCode === 13) {
      $('.grid-item').remove();
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
