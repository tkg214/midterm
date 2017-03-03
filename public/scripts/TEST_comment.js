$(document).ready(function() {
  $('#comment-form').on('submit', function(event) {
    event.preventDefault();
    const content = $(this).find('.comment-content')val();
    const postId = $(this).data('postId');
    //console.log('this is', $(this));
    $.ajax({
      url: '/comments',
      method: 'POST',
      data: {
        postId: postId,
      }
    });
  })
});
