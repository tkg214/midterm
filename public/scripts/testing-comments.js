$(function() {
  $('.comment-form').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.ajax({
      url: '/comments',
      method: 'POST',
      data: data
    }).then(() => {
      alert('comment added');
    });
  });
})
