$(function() {

  function createUserSpecificFeatures() {
    $('#login-modal').modal('hide');
    $('.user-specific').show();
    $('.nonuser-specific').hide();
  }

  // Check if user is logged in for user-specific features on page refresh
  if (Cookies.get('loggedin')) {
    createUserSpecificFeatures();
  }

  $('#login-modal').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).find('form').serialize();
    $.ajax({
      method: 'POST',
      url: '/login',
      data: data
    }).then(function(res) {
      if (res){
        createUserSpecificFeatures();
      }
      else {
        $('#login-handle').val('');
        $('#error-login').slideDown();
      }
    });
  });

  $('#login-handle').on('click', function(event) {
    $('#error-login').slideUp();
  });

  $('#login-button').on('click', function(event) {
    event.preventDefault();
    $('#login-modal').find('input').val('');
  });

});

// TODO error handling if user does not exist
