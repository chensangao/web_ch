$(document).on('ready scroll', function(event) {
	divMove('.inside-title');
	divMove('.coop-all');
	divMove('.wechat-all');
	onceClick('.phone-ctrl-1 span.dot:first-child');
	onceClick('.phone-ctrl-2 span.dot:first-child');
});

$(function() {
	var winW = $(window).width();
	// 手机滑动
	if (winW <= 768) {
	    $('.mh5-phone-all').hammer().on('swipeleft', function(){
	        $(this).find('.ctrl-one-r').click();
	    });

	    $('.mh5-phone-all').hammer().on('swiperight', function(){
	        $(this).find('.ctrl-one-l').click();
	    });
	}

	// coop图标开关
	$('.coop-list').find('.loop-one-hide').wrapAll('<div class="hide-cntr"></div>');
	$('.hide-cntr').hide();

	$('.ctrl-more').click(function(event) {
		if ($('.hide-cntr').css('display') == 'none') {
			$('.coop-list, .ctrl-more').addClass('hi');
			$('.hide-cntr').slideDown(500);

			$('.coop-list').find('.loop-one-hide').each(function(index, el) {
				var _this = $(this);

				if (winW > 768) {
					if (index <= 5) {
						_this.addClass('hi').css('transition', '.8s .1s');
					} else if (index > 5 && index <= 11) {
						_this.addClass('hi').css('transition', '.8s .3s');
					} else {
						_this.addClass('hi').css('transition', '.8s .5s');
					}
				} else {
					if (index <= 2) {
						_this.addClass('hi').css('transition', '.7s .1s');
					} else if (index > 2 && index <= 5) {
						_this.addClass('hi').css('transition', '.7s .2s');
					} else if (index > 5 && index <= 8) {
						_this.addClass('hi').css('transition', '.7s .3s');
					} else if (index > 8 && index <= 11) {
						_this.addClass('hi').css('transition', '.7s .4s');
					} else if (index > 11 && index <= 14) {
						_this.addClass('hi').css('transition', '.7s .5s');
					} else {
						_this.addClass('hi').css('transition', '.7s .6s');
					}
				}
			});
		} else {
			$('.coop-list, .ctrl-more').removeClass('hi');
			$('.hide-cntr').delay(430).slideUp(450);

			$('.coop-list').find('.loop-one-hide').each(function(index, el) {
				var _this = $(this);

				if (winW > 768) {
					if (index <= 5) {
						_this.removeClass('hi').css('transition', '.6s .25s');
					} else if (index > 5 && index <= 11) {
						_this.removeClass('hi').css('transition', '.6s .15s');
					} else {
						_this.removeClass('hi').css('transition', '.6s');
					}
				} else {
					if (index <= 2) {
						_this.removeClass('hi').css('transition', '.5s .5s');
					} else if (index > 2 && index <= 5) {
						_this.removeClass('hi').css('transition', '.5s .4s');
					} else if (index > 5 && index <= 8) {
						_this.removeClass('hi').css('transition', '.5s .3s');
					} else if (index > 8 && index <= 11) {
						_this.removeClass('hi').css('transition', '.5s .2s');
					} else if (index > 11 && index <= 14) {
						_this.removeClass('hi').css('transition', '.5s .1s');
					} else {
						_this.removeClass('hi').css('transition', '.5s');
					}
				}
			});
		}
	});
});

function phoneShow(cntr, imgs) {
	var imgsArrLen = imgs.length;
	var imgsPlace = ['.phone-mid', '.phone-l', '.phone-r'];
	var imgIndex = 0;
	var imgsChangeTimer;

	// 下标创建--初始化
	for (var i in imgs) {
		// i == 0
		// ?
		// 	$('' + cntr + ' .phone-ctrl').append('<span class="dot on"></span>')
		// :
			$('' + cntr + ' .phone-ctrl').append('<span class="dot"></span>')
		// ;
	}

	// 点击下标
	$('' + cntr + ' .phone-ctrl').find('span.dot').click(function(event) {
		indexImgsMove($(this).index(), 1);
	});

	// 下一张
	$('' + cntr + ' .ctrl-one-r').click(function(event) {
		indexImgsMove(1);
	});

	// 上一张
	$('' + cntr + ' .ctrl-one-l').click(function(event) {
		indexImgsMove(0);
	});

	function indexImgsMove(upDownIndex, indexFlag) {
		// 下标切换
		!!indexFlag
		?
			imgIndex = upDownIndex
		:
			!!upDownIndex ? imgIndex++ : imgIndex--;
		;

		if (imgIndex < 0) {
			imgIndex = imgsArrLen - 1;
		} else if (imgIndex > imgsArrLen - 1) {
			imgIndex = 0;
		}

		$('' + cntr + ' .phone-ctrl').find('span.dot').removeClass('on');
		$('' + cntr + ' .phone-ctrl').find('span.dot').eq(imgIndex).addClass('on');

		// 图片切换
		imgsChange();
	}

	function imgsChange() {
		$(cntr).addClass('change');
		if (!!imgsChangeTimer) {
			clearTimeout(imgsChangeTimer);
		}
		imgsChangeTimer = setTimeout(function() {
			for (var i in imgsPlace) {
				$(cntr).find(imgsPlace[i]).find('img')
					.attr('src', imgs[imgIndex][i])
					.load(function() {
						$(cntr).removeClass('change');
					});
			}
		}, 1000);
	}
}
