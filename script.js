// $(document).ready(function(){
// 	$("nav").click(function(){
// 		$(this).hide();
// 	});
// });
(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);