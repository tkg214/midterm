$(document).ready(function() {
  $('submit-button-name').on('submit', function() {
    const url = $('url-text-form').val();
    const title = $('title-form').val();
    const description = $('description-form').val();
    const tag = $('tag-selector').val();
    $.ajax({
      method: 'POST',
      url: '/post',
      data: {
        url: url,
        title: title,
        description: description,
        tag: tag
      },
      success: function() {
          loadPosts(); //TODO will be a function in load-posts.js
      }
    });
  });
});
