// 出场动画
$(document).on('ready scroll', function(event) {
	divMove('.picview-top');
	divMove('.show_con');
	divMove('.is-pad-view');

    var winW = $(window).width(),
	    winH = $(window).height(),//可视窗口高度
	    scrollT = $(window).scrollTop(),//鼠标滚动的距离
	    pu = $(window).width()/1920;

	var $prevNextCntr = $('.prevnext-m');
	var prevNextCntrT = $('.prevnext-m').offset().top;

    if (scrollT + winH/2 - 29 > prevNextCntrT) {
    	$prevNextCntr.removeClass('fly')
    } else {
    	$prevNextCntr.addClass('fly')
    }
});

$(function() {
	var winW = $(window).width(),
		winH = $(window).height();

	if (winW > 768) {
		$('.banner').height(winH);
	}

	$('.prev-m, .next-m').click(function(event) {
		_this = $(this);
		_thisHref = _this.data('href');

		if (!_this.hasClass('fly-high') && !!$('.prevnext-m').hasClass('fly')) {
	    	_this.addClass('fly-high');
		} else {
			window.location.href = _thisHref;
		}

		event.stopPropagation();
	});
	$('body').click(function(event) {
		$('.prev-m, .next-m').removeClass('fly-high');
	});
	
	$('.banner-ani-all > i').each(function() {
		$(this).css('background', 'rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ')');
	});

	// 点击滑动
	$('.down_icon').click(function(){
		var picViewT = $('.picview-all').offset().top;

		$('body').animate({scrollTop: picViewT}, 1000, "easeInOutCubic");
	});

	$('.down_icon').click(function(event) {
		setTimeout(function() {
			$('.down_icon').removeClass('on')
		} ,1000);
	});



	$(window).scroll(function(event) {
		if ($(window).scrollTop() < 30) {
			$('.down_icon').addClass('on')
		}

		// .site-ctrl
		if ($(window).scrollTop() > 50) {
			$('.site-ctrl').addClass('on')
		} else {
			$('.site-ctrl').removeClass('on')
		}
	});
});

bannerResize();

function bannerResize() {
	var	imgW = $('.banner-bg img').width(),
		imgH = $('.banner-bg img').height();

	// $(function() {
	// 	$('.banner').height(winH);
	// });

	$(window).on('load resize', function() {
		var winW = $(window).width(),
			winH = $(window).height();

			console.log(winH);

		if (winW > 768) {
			$('.banner').height(winH);
			$('.banner-bg').height(winH);
			$('.banner-bg-in').css({
				'height': winH
			})
			// $('.banner-bg-in').css({
			// 	'width': 'auto',
			// 	'height': 'auto'
			// });

			if (winW/winH < imgW/imgH) {
				$('.banner-bg-in').width(imgW * winH/imgH);
				$('.banner-bg-in').height(winH);
			} else {
				$('.banner-bg-in').width(winW);
				$('.banner-bg-in').height(imgH * winW/imgW);
			}
		} else {
			// if (winW/(.55*winH) < imgW/imgH) {
			// 	if (winW < 769) {
			// 		$('.banner-bg-in').width(.55* imgW * winH/imgH);
			// 		$('.banner-bg-in').height(.55 * winH);
			// 	}
			// } else {
			// 	if (winW < 769) {
			// 		$('.banner-bg-in').width(winW);
			// 		$('.banner-bg-in').height(imgH * winW/imgW);
			// 	}
			// }
		}

		$('.banner-bg').css('opacity', '1');
	});
}