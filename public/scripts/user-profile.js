// Selectors may need to be changed
$(function() {

  // TODO fix bugs, doesnt work
  $('#update-profile-form').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).find('form').serialize();
    $.ajax({
      url: '/profile',
      method: 'PUT',
      data: data
    }).then(function(res) {
      console.log('update works')
    })
  });
});
