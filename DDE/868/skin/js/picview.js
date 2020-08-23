$(function () {
	$(document).keydown(function (e) {
		if (e.keyCode == 27) _picView.fb.hide($('.floatbox:last'));
		for (var i = 0; _picView.event.keydown.data && i < _picView.event.keydown.data.length; i++) {
			_picView.event.keydown.data[i].call(e);
		}
	});
});

var _picView = {
	event: {
		keydown: {
			data: [],
			add: function (name, call) { this.data.push({ name: name, call: call }) },
			remove: function (name) { for (var i = 0; this.data && i < this.data.length; i++) { if (this.data[i].name == name) this.data.splice(i, 1); } }
		}
	},
	picview: {
		show: function (ct, ch, call) {
			_picView.picview.hide();
			var ms = ct.find('img');
			if (!ch.is('img')) ch = ch.find('img');
			var i = -1; var vsrc = (typeof ch.attr('org') == 'undefined' ? ch.attr('src') : ch.attr('org'));
			for (j = 0; j < ms.length; j++) if (ms.eq(j).attr('org') == vsrc) i = j;
			var v = $('<div class="_picView" data-position-to="window"><a href="#" onclick="return false;" class="close"></a><a href="#" onclick="return false;" class="prev"></a><img src="loading4.gif" class="load" /><div class="pbox"><img onmousedown="return false;" onmousemove="return false;" src=' + vsrc + ' /></div><a href="#" onclick="return false;" class="next"></a></div>').appendTo(document.body).bind('mousewheel', function (event, delta, deltaX, deltaY) {
				var pb = v.find('.pbox');
				var o = delta > 0 ? 100 : -100;
				var y = parseInt(pb.css('marginTop').replace('px', '')) + o;
				if (v.height() >= pb.height()) {
					if (y < 0) {
						y = 0;
					} else if (y > v.height() - pb.height()) {
						y = v.height() - pb.height();
					} 
				} else {
					if (y > 0) y = 0;
					else if (y < v.height() - pb.height()) y = v.height() - pb.height();
				}
				pb.css('marginTop', y);
				return false;
			});
			v.find('.close').click(function () { _picView.picview.hide(); });
			if (i <= 0) v.find('.prev').hide(); else v.find('.prev').bind('click', function () { _picView.picview.show(ct, ms.eq(i - 1), call); });
			if (i < 0 || i >= ms.length - 1) v.find('.next').hide(); else v.find('.next').bind('click', function () { _picView.picview.show(ct, ms.eq(i + 1), call); });
			_picView.event.keydown.add('picview', function (e) { if (e.keyCode == 27) { _picView.picview.hide(); } else if (e.keyCode == 37 && i > 0) { _picView.picview.show(ct, ms.eq(i - 1), call); } else if (e.keyCode == 39 && i >= 0 && i < ms.length - 1) { _picView.picview.show(ct, ms.eq(i + 1), call); } });
			v.find('.pbox img').load(function () {
				v.find('.load').hide();
				var pb = v.find('.pbox');
				var x, y, mx, my;
				pb.bind('mouseenter mouseleave', function () { $(document).unbind('mousemove'); });
				v.bind('mouseenter mouseleave', function () { $(document).unbind('mousemove'); });
				pb.css('marginTop', v.height() > pb.outerHeight() ? (v.height() - pb.outerHeight()) / 2 : 0).css('marginLeft', (v.width() - pb.outerWidth()) / 2).bind('mouseup touchend', function () { $(document).unbind('mousemove touchmove'); }).bind('mousedown touchstart', function (event) { event.preventDefault(); x = event.pageX || event.originalEvent.changedTouches[0].pageX; y = event.pageY || event.originalEvent.changedTouches[0].pageY; mx = parseInt(pb.css('marginLeft').replace('px', '')); my = parseInt(pb.css('marginTop').replace('px', '')); $(document).bind('mousemove touchmove', function (event) { pb.css({ marginLeft: (event.pageX || event.originalEvent.changedTouches[0].pageX) - x + mx, marginTop: (event.pageY || event.originalEvent.changedTouches[0].pageY) - y + my }); }); }).fadeIn(200);
			});
			if (typeof call == 'function') call(v, ms.length, i);
		},
		hide: function () { _picView.event.keydown.remove('picview'); $(document).unbind('mousemove mouseenter'); $('._picView').unbind('mousewheel').remove(); }
	},
	fb: {
		hide: function (fbox, callback) {
			_picView.toplock = null;
			_picView.fb.callback = null;
			if ($(document.body).find(fbox).length > 0) {
				fbox.stop().fadeOut(300, function () {
					fbox.remove();
					_picView.shelter();
					//if ($('#dvShelter').length <= 0) $('.ui-datepicker').remove();
					if (typeof callback == 'function') callback();
				});
			}
		}
	}
}