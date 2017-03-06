$(function() {
  $('#register-modal').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).find('form').serialize();
    $.ajax({
      method: 'POST',
      url: '/register',
      data: data
    }).then(function(data){
      if (data.handle) {
        $('#register-handle').val('');
        $('#error-duplicate-handle').slideDown();
      } else {
        $('#register-modal').modal('hide');
        $('#register-modal').find('input').val('');
        $('#login-button').trigger('click');
      }
    }).fail(function(err) {
    });
  });

  $('#register-handle').on('click', function(event) {
    $('#error-duplicate-handle').slideUp();
  });

  $('#register-button').on('click', function(event) {
    event.preventDefault();
    $('#register-modal').find('input').val('');
  });

});

// TODO error handling if user exists
