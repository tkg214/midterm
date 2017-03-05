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
});
