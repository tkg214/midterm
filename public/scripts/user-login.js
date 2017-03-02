$(document).ready(() => {
  //Selectors need to be changed
  $('login-button').on('submit', () => {
    const username = $('text-form-username').val();
    const password = $('password-form').val();
    $.ajax({
      method: 'POST',
      url: '/login',
      data: {
        username: username,
        password: password
      }
    }).then(() => {
      //createPost(results);
    });
  });
});
