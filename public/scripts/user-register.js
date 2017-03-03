$(function() {
  $('#register-modal').on('submit', function() {
    const data = $(this).closest('form').serialize();
    $.ajax({
      method: 'POST',
      url: '/register',
      data: data
    }).then(function(data){
      // TODO display success message to confirm user has successfully registered
    }).fail(function(err) {
    });
  });
});

// TODO error handling if user exists
