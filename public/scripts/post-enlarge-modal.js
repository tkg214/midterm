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

  const $close = $('#login-modal').find($('.close'));

  function createEnlargePostModal(post, callback) {
    getEmbededMedia(post.url, function($media) {
      const $modal = $('<div>').attr({
        tabindex: '-1',
        role: 'dialog',
        class: 'modal fade'});
      const $modalDoc = $('<div>').addClass('modal-dialog').attr('role', 'document')
      const $modalContent = $('<div>').addClass('modal-content post-modal row');
      const $header = $('<div>').addClass('modal-header');
      const $title = $('<h3>').addClass('modal-title').text(post.title);
      $header.append($title, $close);
      const $contentBox = $('<div>').addClass('modal-body enlarge-content-box');
      const $postContentBody = $('<div>').addClass('enlarge-content-body');
      const $description = $('<p>').text(post.content);
      const $handle = $('<h3>').text('By ' + post.handle);
      const $commentsHeading = $('<h3>').text('Comments');
      const $commentsBox = $('<div>').addClass('enlarge-content-comments-box').attr('id', 'comments-box');
      if (post.comments) {
        let postComments = post.comments.sort(function(a, b) {
          return b.date - a.date;
        });
        for (let comment of postComments) {
          let $commentContainer = $('<div>').addClass('comment-container').attr('id', 'comment-' + comment.id);
          let $commentContent = $('<p>').text(comment.content);
          let $commentDate = $('<h4>').append($('<span>').addClass('label label-default')
          .data('comment-date', comment.date).text('By ' + comment.handle + ' on ' + comment.date.slice(0,10)));
          $commentContainer.append($commentContent, $commentDate);
          $commentsBox.append($commentContainer);
        }
      }
      $contentBox.append($media, $postContentBody.append($description, $handle, $commentsHeading, $commentsBox));
      const $userFeaturesRow = $('<div>').addClass('enlarge-content-user-features row');

      if (Cookies.get('loggedin')) {
        const $userFeaturesBox = $('<div>').addClass('col-lg-12');
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
        $userFeaturesBox.append($commentForm.append($commentInput, $commentButton));

        const $likeSubmit = $('<form>').attr({
          id: 'like-submit',
          action: '/likes',
          method: 'POST'
        }).append($('<button>').addClass('btn btn-default').attr('type', 'submit').text('Like'));

        const $ratingSubmit = $('<form>').attr({
          id: 'rating-submit',
          action: '/rating',
          method: 'POST'
        })
        const $ratingButton = $('<div>').addClass('dropdown');

        const $ratingDropdownButton = $('<button>').attr({
          type: 'submit',
          class:'btn btn-default dropdown-toggle',
          'data-toggle': 'dropdown'
        }).text('Rate').append($('<span>').addClass('caret'));

        const $ratingDropdown = $('<ul>').addClass('dropdown-menu');
        const ratingOptions = 5;
        for (let i = 0; i <= ratingOptions; i++) {
          if (i === 0) {
            i++;
            $ratingDropdown.append($('<li>').append($('<a>').addClass('dropdown-item').text('Remove Rating')));
            $ratingDropdown.append($('<li>').addClass('divider').attr('role', 'separator'));
          }
          $ratingDropdown.append($('<li>').append($('<a>').addClass('dropdown-item').text(i)));
        }
        $ratingSubmit.append($ratingButton.append($ratingDropdownButton, $ratingDropdown));
        $userFeaturesBox.append($likeSubmit, $ratingSubmit);
        $userFeaturesRow.append($userFeaturesBox);
        $contentBox.append($userFeaturesRow)
      }

      const postDate = post.post_date.slice(0, 10);
      // TODO switch to num_likes
      const likesCount = post.likes;
      if (likesCount === 'true') {
        likesCount === '0'
      }

      const myRating = Math.round(post.rating);

      // TODO Refactor:
      const $date = $('<h3>').append($('<span>').addClass('label label-default')
      .attr('id', 'post-date').data('post-date', postDate).text('Created on: ' + postDate));

      const $likes = $('<h3>').append($('<span>').addClass('label label-default')
      .attr('id', 'likes-count').data('likes-count', likesCount).text('Likes: ' + likesCount));

      const $footer = $('<div>').addClass('modal-footer');
      $footer.append($likes);

      //TODO change this once get post function is complete
      if (myRating) {
        const $myRating = $('<h3>').append($('<span>').addClass('label label-default')
        .attr('id', 'my-rating').text('My Rating: ' + myRating).data('my-rating', myRating));
        $footer.append($myRating);
      }

      $footer.append($date);

      $modal.append($modalDoc.append($modalContent.append($header, $contentBox, $footer)));
      callback($modal);
    });
  };

  $('.grid').on('click', '.grid-item', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const postId = +$(this).attr('id');
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
        modal.on('click', '#rating-submit', function(event) {
          event.preventDefault();
          $('#rating-submit').on('click', 'li', function(event) {
            event.preventDefault();
            $('my-rating').dropdown('toggle');
            let rating = $(this).find('a').text();
            if (rating === 'Remove Rating') {
              rating = '0'
            }
            $.ajax({
              url: '/rating',
              method: 'POST',
              data: { postid: postId, rating: rating }
            }).then(function(rating) {
              if (rating.myRating === '0') {
                $('#my-rating').remove();
              }
              $('#my-rating').remove();
              $('#likes-count').after($('<h3>').append($('<span>').addClass('label label-default')
              .attr('id', 'my-rating').text('My Rating: ' + rating.myRating).data('my-rating', rating.myRating)));
            });
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
          }).then(function(comments) {
            $('#comment-submit').find('input').val('');
            const newComment = (comments[comments.length - 1]);
            let $commentContainer = $('<div>').addClass('comment-container').attr('id', 'comment-' + newComment.id);
            let $commentContent = $('<p>').text(newComment.content);
            let $commentDate = $('<h4>').append($('<span>').addClass('label label-default')
            .data('comment-date', newComment.date).text('By ' + newComment.handle + ' on ' + newComment.date.slice(0,10)));
            $commentContainer.append($commentContent, $commentDate);
            $('#comments-box').append($commentContainer.fadeIn('slow'));
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
