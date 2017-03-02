$(document).ready(function() {
  $('submit-button').on('submit', () => {
    const first_name = $('text-form-firstname').val();
    const last_name = $('text-form-lastname').val();
    const username = $('text-form-username').val();
    const handle = $('text-form-handle').val();
    const password = $('password-form').val();
    $.ajax({
      method: 'POST',
      url: '/register',
      data: {
        firstName: first_name,
        lastName: last_name,
        username: username,
        handle: handle,
        password: password
      }
    });
  });
});
