$(document).ready(function() {
  //Selectors need to be changed
  $('#register-form').on('submit', function(event) {
    event.preventDefault();
    const firstName = $(this).find('.firstname').val();
    const lastName = $(this).find('.lastname').val();
    const handle = $(this).find('.reg-handle').val();
    const email = $(this).find('.email').val();
    $.ajax({
      method: 'POST',
      url: '/register',
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        handle: handle
      }
    });
  });
});
