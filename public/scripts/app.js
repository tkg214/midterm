/*
 * Client side Application
 */

 $(function() {

  $('.grid').packery({
    // use a separate class for itemSelector, other than .col-
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  const $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 100
  });

  const $draggable = $('.draggable').draggabilly({
  })

  $grid.find('.grid-item').each( function( i, gridItem ) {
    var draggie = new Draggabilly( gridItem );
    $grid.packery( 'bindDraggabillyEvents', draggie );
  });

  // This handles the Search BOX not needing a submit button, just press ENTER inside.
  // TODO: Fix the route
  $('#search').on('keyup', function(e){
    if(e.keyCode === 13) {
      var parameters = { search: $(this).val() };

      $.get('/search', parameters, function(data){
        if (data instanceof Array) {
          $results.html(dataTemplate({resultsArray: data}));
        } else {
          $results.html(data);
        }
      });
    }
  });
});
