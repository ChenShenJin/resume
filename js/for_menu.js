
(function() {
if ($(window).Top() > $('.large-header').height()) {

	$('.menu').addClass('show_menu');

} else{

}
});

$(window).scroll(function() {//設定視窗捲軸函數
    if ($(window).scrollTop() > $('.large-header').height() - 500) {

    	$('.menu').addClass('show_menu');
        $('.gotop').show();

    } else{

	      $('.menu').removeClass('show_menu');
	      $('.gotop').hide();
    }
});