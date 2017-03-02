$(document).ready(function() {
  //Selectors need to be changed
  $('.new-post').on('submit', (event) => {
    event.preventDefault();
    const url = $(this).find('input .enter-url').val();
    const title = $(this).find("input[value='enter-title']").val();
    const description = $(this).find('input .enter-description').val();
    const tag = $(this).find('select .select-tag option:selected').val();
    $.ajax({
      method: 'POST',
      url: '/post',
      data: {
        url: url,
        title: title,
        description: description,
        tag: tag
      }
    }).then((results) => {
      loadPost(results);
    });
  });
});
