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

  function createPostModal(post, callback) {
    getEmbededMedia(post[0].url, function($media) {
      const $modal = $('<div>').attr({
        tabindex: '-1',
        role: 'dialog',
        class: 'modal fade'});
      const $modalDoc = $('<div>').addClass('modal-dialog').attr('role', 'document')
      const $modalContent = $('<div>').addClass('modal-content post-modal');
      const $header = $('<div>').addClass('modal-header');
      const $title = $('<h5>').addClass('modal-title').text(post[0].title);
      const $close = $('<button>').attr({
        type: 'button',
        class: 'close',
        'data-dismiss': 'modal'
      }).append($('<span>').text('&times;'));
      $header.append($title, $close);
      const $contentBox = $('<div>').addClass('modal-body');
      const $description = $('<p>').text(post[0].content);
      const $handle = $('<h5>').text(post[0].handle);
      $contentBox.append($media, $description, $handle);
      const $date = $('<span>').addClass('label label-default').text('Created on ' + post[0].date);
      const $likes = $('<span>').addClass('label label-default').text('Likes ' )
      const $footer = $('<div>').addClass('modal-footer');
      $footer.append($date, $likes);
      $modal.append($modalDoc.append($modalContent.append($header, $contentBox, $footer)));
      callback($modal);
    });
  };

  // TODO add comments and user interactivitey
  $('.grid').on('click', '.thumb', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const postId = $(this).attr('id');;
    $.ajax({
      url: '/post?postid=' + postId,
      method: 'GET'
    }).then(function(post){
      createPostModal(post, function(modal) {
        modal.modal('show');
      })
    });
  });
});

// <nav aria-label="...">
//   <ul class="pager">
//     <li class="previous disabled"><a href="#"><span aria-hidden="true">&larr;</span> Older</a></li>
//     <li class="next"><a href="#">Newer <span aria-hidden="true">&rarr;</span></a></li>
//   </ul>
// </nav>

// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//   Launch demo modal
// </button>
