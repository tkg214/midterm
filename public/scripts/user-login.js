$(function() {

  function createUserSpecificFeatures(user) {
    $('#login-modal').modal('hide');
    $('#update-profile-button').parent().parent().prepend($('<li>').append($('<button>').attr('id', 'username').addClass('btn btn-primary btn-md user-specific').text('Hello ' + user)));
    $('.user-specific').show();
    $('.nonuser-specific').hide();
  }

  // Check if user is logged in for user-specific features on page refresh
  if (Cookies.get('loggedin')) {
    const username = Cookies.get('loggedin');
    createUserSpecificFeatures(username);
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
        const username = Cookies.get('loggedin');
        createUserSpecificFeatures(username);
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
