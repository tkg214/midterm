$(function() {
  $('#register-modal').on('submit', function(event) {
    event.preventDefault()
    const data = $(this).find('form').serialize();
    $.ajax({
      method: 'POST',
      url: '/register',
      data: data
    }).then(function(){
      $('#register-modal').modal('hide');
    }).fail(function(err) {

    });
  });
});

// TODO error handling if user exists
