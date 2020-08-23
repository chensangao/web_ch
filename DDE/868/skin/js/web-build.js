$(document).on('ready scroll', function(event) {
	divMove('.web-build-one-cntr', true);
	divMove('#wb-one-1');
	divMove('#wb-one-2');
	divMove('#wb-one-3');
	divMove('#wb-one-4');
});

$(function() {
	//jQuery锚点导航
	var aArr = ['wb-one-1', 'wb-one-2', 'wb-one-3', 'wb-one-4'];
	var initT = 0;
	var navMoveFlag = false;
	var navMoveTime;

	$('.menu > ul > li').click(function() {
		var _index = $(this).index();
		initT = ($(window).height() - $('#'+ aArr[_index] +'').height())/2;

	    $('html, body').stop().animate({scrollTop: $('#'+ aArr[_index] +'').offset().top - initT + 'px'}, 1000);

		navMoveFlag = true;
		clearTimeout(navMoveTime);
	    navMoveTime = setTimeout(navMoveFalse, 1000);
	});

	descHeightCtrl();
});

$(window).load(function() {
	descHeightCtrl();
});

function descHeightCtrl() {
	var winW = $(window).width();

	if (winW >= 1200) {
		// 控制高度，保险
		$('.web-build-one-desc').height($('.web-build-one-img').height());
	}
}