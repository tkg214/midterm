$(function() {

  // API request to iframely that responds with embeded media (no error handling yet)
  function getEmbededMedia(url, callback) {
    // can be MD5 hash later--see iframely docs for details
    const api_key = '9a31fa0ea616afd2acb04d';
    $.ajax({
      url: 'http://iframe.ly/api/iframely?url=' + url + '&api_key=' + api_key,
      method: 'GET'
    }).then(function(embededMedia){
      callback(embededMedia.html);
    });
  }

  // TODO remove $media element if somoene clicks preview again
  $('#new-post-modal').on('click', '#new-post-preview', function() {
    const $url = $('#new-post-url').val();
    getEmbededMedia($url, function($media) {
      $('#new-post-modal').find('iframe').parent().parent().remove();
      $('#new-post-url').closest('div').after($media);
    });
  });

  // Close button on modal to trigger warning modal
  $('.close-first-modal').on('click', function () {
    $('#warning-modal').modal('show').on('show.bs.modal', function () {
    });
    $('#confirm-close').on('click', function () {
      $('#warning-modal').modal('hide');
      $('#new-post-modal').find('input').val('');
      $('#new-post-modal').modal('hide');
    });
  });

  // Submit new post and close on submission, then append new post to grid
  $('#new-post-modal').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).find('form').serialize();
    $.ajax({
      method: 'POST',
      url: '/post',
      data: data
    }).then(function(data){
      if (data.url) {
        $('#new-post-url').val('');
        $('#error-duplicate-url').slideDown();
      } else {
        $('#new-post-modal').modal('hide');
        $('#new-post-modal').find('input').val('');
        $('#new-post-modal').find('iframe').parent().parent().remove();
        $('#myresources-button').trigger('click');
      }
    }).fail(function(err) {
    });
  });

  $('#new-post-url').on('click', function(event) {
    $('#error-duplicate-url').slideUp();
  });

});
