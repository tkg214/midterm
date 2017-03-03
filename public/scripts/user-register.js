$(function() {
  $('#register-modal').on('submit', function() {
    const data = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/register',
      data: data
    }).then(function(){
      // TODO display success message to confirm user has successfully registered
    });
  });
});

// TODO error handling if user exists
