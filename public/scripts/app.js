/*
 * Client side Application
 */

 $(function() {

  const $grid = $('.grid').imagesLoaded( function() {
    $grid.packery({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  });
  $grid.on( 'click', '.grid-item', function(event) {
    $(event.currentTarget).toggleClass('grid-item--large');
    $grid.packery('shiftLayout');
  });
  //  // bind event
  //  $grid.masonry( 'on', 'layoutComplete', function() {
  //    console.log('layout is complete');
  //  });
  //  // trigger initial layout
  //  $grid.masonry();


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
