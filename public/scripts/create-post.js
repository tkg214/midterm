$(document).ready(function() {
  function createPost(data) {
    //Element tags and class names still need to be changed
    $post = $('<article>').addClass('class-name');
    $thumbnail = $('<header>').addClass('class-name');
    $content = $('<section>').addClass('class-name');
    $($post).append($thumbnail, $content);

    loadPosts($post);
  }
  createPost(data);
});
