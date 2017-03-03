$(document).ready(function() {
  $('#login-form').on('submit', function(event) {
    event.preventDefault();
    const $this = $(this);
    const handle = $(this).find('.handle').val();
    // const password = $(this).find('.password').val();
    // gonna have password later?
    $.ajax({
      method: 'POST',
      url: '/login',
      data: {
        handle: handle
        // password: password
      }
    });
  });
});
