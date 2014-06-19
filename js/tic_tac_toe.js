$('.board').on('click', '.square', function(event) {
  // Select the square
  var $square = $(event.currentTarget);
  $square.addClass('square-x');
});
