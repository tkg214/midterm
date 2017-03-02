//LOAD ALL THE POSTS AND THE NEWLY CREATED POST
$(document).ready(function() {

  $(function() {

    // Function creates jQuery object to be used for rendering
    function createPostElement(post) { // group things in order you use them
      const $row = $('<div>').addClass('row');
      const $post = $('<div>').addClass('col-sm-4 col-md-3');
      const $link = $('<a>').attr('href', post.url_ref);
      const $thumb = $('<div>').addClass('thumbnail');
      const $media = $('<img>').attr('src', 'http://placehold.it/319x200');
      const $caption = $('<div>').addClass('caption');
      const $title = $('<h3>').text(post.title);
      const $content = $('<p>').text(post.content);
      $post.append($thumb.append($link.append($media), $caption.append($title, $content)));
      $row.append($post);
      return $row;
    }

    // Function renders tweets and prepends each tweet element
    function renderPosts(posts) {
      for (let post of posts) {
        $('.all-posts').prepend(createPostElement(post));
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
});
