$(document).ready(function() {
  //Selectors need to be changed
  $('#login-form').on('submit', function(event) {
    event.preventDefault();
    const $this = $(this);
    // console.log($this);
    const username = $(this).find('.username').val();
    const password = $(this).find('.password').val();
    // console.log('username', username);
    // console.log('password', password);
    // alert('clicked');
    // $.ajax({
    //   method: 'POST',
    //   url: '/login',
    //   data: {
    //     username: username,
    //     password: password
    //   }
    // }).then(() => {
    //   //createPost(results);
    // });
  });
});
