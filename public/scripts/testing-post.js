$(function() {
  $('.test-post-fn').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.ajax({
      url: '/post',
      method: 'GET',
      data: data
    }).then(() => {
      alert('success');
    });
  });
});
