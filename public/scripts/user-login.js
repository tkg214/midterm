$(function() {
  $('#login-modal').on('submit', function() {
    const data = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/login',
      data: data
    }).then(function() {
      // TODO show user specific features and remove login/register buttons
    });
  });
});

// TODO error handling if user does not exist
