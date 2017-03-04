// Selectors may need to be changed
$(function() {
  $('#update-profile-form').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.ajax({
      url: '/profile',
      method: 'PUT',
      data: data,
      success: (data) => {
        alert('Updated');
      }
    });
  });
});
