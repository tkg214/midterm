$(document).ready(function() {
  $('.registration').find('form .register').on('submit', () => {
    event.preventDefault();
    const first_name = $(this).find('input[name='firstName']').val();
    const last_name = $(this).find('input[name='lastName']').val();
    const handle = $(this).find('input[name='handle']').val();
    const email = $(this).find('input[name='email']').val();
    $.ajax({
      method: 'POST',
      url: '/register',
      data: {
        firstName: first_name,
        lastName: last_name,
        handle: handle,
        email: email
      }
    });
  });
});
