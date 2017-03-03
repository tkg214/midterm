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
    }).then(function() {
      createUserSpecificFeatures();
    }).fail(function(err) {
    });
  });
});

// TODO error handling if user does not exist
