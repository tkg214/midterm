$(function() {
  $('#login-modal').on('submit', function() {
    const data = $(this).closest('form').serialize();
    $.ajax({
      method: 'POST',
      url: '/login',
      data: data
    }).then(function(data) {
      // TODO show user specific features and remove login/register button
    }).fail(function(err) {
    });
  });
});

// TODO error handling if user does not exist
