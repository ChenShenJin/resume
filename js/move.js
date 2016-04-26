/*
$(document).ready(function(){  
	TweenMax.from(".index", 1, {opacity:0, delay:1})
    TweenMax.from(".index_p1", 1, {left:150, top:220, opacity:0, delay:2})
    TweenMax.from(".index_p2", 1, {left:-15, top:-300, opacity:0, delay:2})
    TweenMax.from(".index_p3", 1, {scale:0.5, opacity:0, delay:2.5})
    TweenMax.from(".index_p4", 1, {scale:0.9, opacity:0, delay:3})
});  
*/
$(function(){

	$('.arr_go').click(function(){
		$('html,body').animate({scrollTop:$('#a1').offset().top - 50}, 1000,"easeInOutExpo");
		return false;//取消#字號超連結之問題
	});

	$('.go2').click(function(){
		$('html,body').animate({scrollTop:$('#a2').offset().top - 50}, 1000,"easeInOutExpo");
		return false;//取消#字號超連結之問題
	});

	$('.go3').click(function(){
		$('html,body').animate({scrollTop:$('#a3').offset().top - 50}, 1000,"easeInOutExpo");
		return false;//取消#字號超連結之問題
	});

	$('.go4').click(function(){
		$('html,body').animate({scrollTop:$('#a4').offset().top - 50}, 1000,"easeInOutExpo");
		return false;//取消#字號超連結之問題
	});

	$('.videoplayer').hide();

	$('#tab01').click(function(){
		$('#gl01').show();
		$('#gl02').hide();
		$('#gl03').hide();
		$('.videoplayer').hide();
		$('#tab01').show().addClass('active');;
		$('#tab02').removeClass('active');
		$('#tab03').removeClass('active');
		return false;//取消#字號超連結之問題
	});

	$('#tab02').click(function(){
		$('#gl02').show();
		$('#gl01').hide();
		$('.videoplayer').hide();
		$('#gl03').hide();
		$('#tab02').show().addClass('active');
		$('#tab01').removeClass('active');
		$('#tab03').removeClass('active');
		return false;//取消#字號超連結之問題
	});

	$('#tab03').click(function(){
		$('#gl03').show();
		$('#gl01').hide();
		$('#gl02').hide();
		$('.videoplayer').show();
		$('#tab03').show().addClass('active');
		$('#tab01').removeClass('active');
		$('#tab02').removeClass('active');
		return false;//取消#字號超連結之問題
	});



	
	$("#logo, .gotop").click(function(){

		$("html,body").animate({scrollTop:0},1500,"easeInOutExpo");//如欲控制整個網頁須先下$("html,body")(舊瀏覽器是看body,新瀏覽器看html)

		return false;//取消#字號超連結之問題

	});



/*

$('.sec02').hide();
$('.sec03').hide();
$('.sec04').hide();
$('.sec05').hide();


$(window).scroll(function() {//設定視窗捲軸函數
    if ($(window).scrollTop() > $('.index').height() - 350) {
    	$('.sec02').show().addClass('show_sec');
    } else{
    	$('.sec02').hide().removeClass('show_sec');
    }
});

$(window).scroll(function() {//設定視窗捲軸函數
    if ($(window).scrollTop() > $('.index').height() + $('.sec02').height() - 150) {
    	$('.sec03').show().addClass('show_sec');
    } else{
    	$('.sec03').hide().removeClass('show_sec');
    }
});

$(window).scroll(function() {//設定視窗捲軸函數
    if ($(window).scrollTop() > $('.index').height() + $('.sec02').height() + $('.sec03').height() - 450) {
    	$('.sec04').show().addClass('show_sec');
    } else{
    	$('.sec04').hide().removeClass('show_sec');
    }
});

$(window).scroll(function() {//設定視窗捲軸函數
    if ($(window).scrollTop() > $('.index').height() + $('.sec02').height() + $('.sec03').height() + $('.sec04').height() - 450) {
    	$('.sec05').show().addClass('show_sec');
    } else{
    	$('.sec05').hide().removeClass('show_sec');
    }
});


$(".menu > #cssmenu > ul > li").click(function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});


*/
	

	



});
		
	
