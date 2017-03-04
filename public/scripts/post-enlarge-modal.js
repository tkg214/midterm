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

  function createEnlargePostModal(post, callback) {
    getEmbededMedia(post[0].url, function($media) {
      const $modal = $('<div>').attr({
        tabindex: '-1',
        role: 'dialog',
        class: 'modal fade'});
      const $modalDoc = $('<div>').addClass('modal-dialog').attr('role', 'document')
      const $modalContent = $('<div>').addClass('modal-content post-modal row');
      const $header = $('<div>').addClass('modal-header');
      const $title = $('<h3>').addClass('modal-title').text(post[0].title);
      const $close = $('#login-modal').find($('.close'));
      $header.append($title, $close);
      const $contentBox = $('<div>').addClass('modal-body enlarge-content-box');
      const $postContentBody = $('<div>').addClass('enlarge-content-body');
      const $description = $('<p>').text(post[0].content);
      const $handle = $('<h3>').text('By ' + post[0].handle);
      const $commentsHeading = $('<h3>').text('Comments');
      const $commentsBox = $('<div>').addClass('enlarge-content-comments-box');
      if (post[0].comments) {
        let postComments = post[0].comments.sort(function(a, b) {
          return b.date - a.date;
        });
        for (let comment of postComments) {
          let $commentContainer = $('<div>').addClass('comment-container');
          let $commentContent = $('<p>').text(comment.content);
          let $commentDate = $('<h4>').append($('<span>').addClass('label label-default')
          .data('comment-date', comment.date).text(comment.date.slice(0,10)));
          $commentContainer.append($commentContent, $commentDate);
          $commentsBox.append($commentContainer);
        }
      }
      $contentBox.append($media, $postContentBody.append($description, $handle, $commentsHeading, $commentsBox));
      const $footer = $('<div>').addClass('modal-footer');
      const $userFeatures = $('<div>').addClass('enlarge-content-user-features row');
      if (Cookies.get('loggedin')) {
        const $newComment = $('<div>').addClass('col-lg-12').append($('<div>').addClass('input-group'));
        const $commentForm = $('<form>').attr({
          id: 'comment-submit',
          action: '/comments',
          method: 'POST'
        });
        const $commentInput = $('<input>').attr({
          type: 'text',
          class: 'form-control',
          placeholder: 'eg Great video!'
        });
        const $commentButton = $('<span>').addClass('input-group-btn')
        .append($('<button>').addClass('btn btn-default').attr('type', 'submit').text('Comment'));
        $userFeatures.append($newComment.append($commentForm.append($commentInput, $commentButton)));

        const $likeButton = $('<form>').attr({
          id: 'like-submit',
          action: '/likes',
          method: 'POST'
        }).append($('<button>').addClass('btn btn-default').attr('type', 'submit').text('Like'));

        // TODO implement ratings
        // const $ratingButton = $('<form>').attr({
        //   id: 'rating-submit',
        //   action: '/rating',
        //   method: 'POST'
        // });
        // TODO comments need to have handles on them

        $footer.append($likeButton);
      }
      const postDate = post[0].post_date.slice(0, 10);
      const likesCount = post[0].likes;
      const $date = $('<h3>').append($('<span>').addClass('label label-default')
      .attr('id', 'post-date').data('post-date', postDate).text('Created on: ' + postDate));
      const $likes = $('<h3>').append($('<span>').addClass('label label-default')
      .attr('id', 'likes-count').data('likes-count', likesCount).text('Likes: ' + likesCount));
      $contentBox.append($userFeatures)
      $footer.append($date, $likes);
      $modal.append($modalDoc.append($modalContent.append($header, $contentBox, $footer)));
      callback($modal);
    });
  };


  // TODO ajax ratings



  // TODO add comments and user interactivitey + ratings + likes
  $('.grid').on('click', '.thumb', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const postId = $(this).attr('id');;
    $.ajax({
      url: '/post?postid=' + postId,
      method: 'GET'
    }).then(function(post){
      createEnlargePostModal(post, function(modal) {
        modal.modal('show');
        modal.on('submit', '#like-submit', function(event) {
          event.preventDefault();
          event.stopPropagation();
          $.ajax({
            url: '/likes',
            method: 'POST',
            data: { postid: postId, like: true }
          }).then(function(likes) {
            // const currentLikes = +$('#likes-count').data('likes-count');
            $('#likes-count').text('Likes: ' + likes).data('likes-count', likes);
          });
        });
        modal.on('submit', '#comment-submit', function(event) {
          event.preventDefault();
          event.stopPropagation();
          const content = $('#comment-submit').find('input').val();
          $.ajax({
            url: '/comments',
            method: 'POST',
            data: { postid: postId, content: content }
          }).then(function(comment) {
            console.log(comment)
          });
        });
        modal.on('hidden.bs.modal', function(event) {
          event.preventDefault();
          modal.remove();
        });
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
