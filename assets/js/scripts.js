$('.js-more').on('click', function () {
  $(this).remove();
  $('.list:hidden:first').css('display', 'inline');
});
