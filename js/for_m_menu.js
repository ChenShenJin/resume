
(function() {
if ($(window).Top() > $('.large-header').height()) {

	$('.m_menu_bar').addClass('show_menu');

} else{

}
});

$(window).scroll(function() {//設定視窗捲軸函數
    if ($(window).scrollTop() > $('.large-header').height() - 500) {

    	$('.m_menu_bar').addClass('show_menu');
        $('.gotop').show();
        

    } else{

	      $('.m_menu_bar').removeClass('show_menu');
	      $('.gotop').hide();
    }
});