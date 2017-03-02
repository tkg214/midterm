//LOAD ALL THE POSTS AND THE NEWLY CREATED POST
function loadPost(results) {
  //Selectors need to be changed
  let $div = $('<div>').addClass('row post')
  let $article = $('<article>').addClass('col-sm-4 col-md-3');
  let $header = $('<header>').addClass('thumbnail');
  let $img = $('<img>').attr({src: "http://placehold.it/319x200", alt: "Video"});
  let $section = $('<section>').addClass('caption');
  let $h3 = $('<h3>').text('thumbnail hello test');
  $($section).append($h3);
  $($header).append($img, $section);
  $($article).append($header);
  $($div).append($article);

  $('#posts-list').prepend($div);
  //loadPosts($post);
}

$(document).ready(function() {
  loadPost(results);
});
