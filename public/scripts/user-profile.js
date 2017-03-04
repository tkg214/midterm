$(function() {
  $('#update-profile-form').on('submit', function(event) {
    event.preventDefault();
    // const newFirstName = $(this).find('.new-first-name').val();
    // const newLastName = $(this).find('.new-last-name').val();
    // const newEmail = $(this).find('.new-email').val();
    const data = $(this).serialize();
    $.ajax({
      url: '/profile',
      method: 'PUT',
      data: data
    });
  });
});
