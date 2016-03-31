$('.menu').addClass('show_menu');
$(window).scroll(function() {//設定視窗捲軸函數
    if ($(window).scrollTop() > 0 ) {

    	$('.menu').addClass('show_menu');
        $('.gotop').show();

    } else{

    }
});

       