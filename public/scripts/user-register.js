<<<<<<< HEAD
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
=======
$(function() {
  $('#register-modal').on('submit', function() {
    const data = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/register',
      data: data
    }).then(function(){
      // TODO display success message to confirm user has successfully registered
>>>>>>> d2ba12698b241e7901cfb3a3582ade8fb65a05e6
    });
  });
});

// TODO error handling if user exists
