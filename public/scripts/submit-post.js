$(document).ready(function() {
  $('submit-button-name').on('submit', function() {
    event.preventDefault();
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
      }
    }).then(() => {
      loadPost();
    });
  });
});
