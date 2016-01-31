$(function() {
	// Animate.css
	$("nav, h1, p, i, .inner-text, #bg").addClass('animated');

	// ナビゲーション、テキスト
	$("#block-01 nav, #block-01 h1, #block-01 p").addClass('fadeIn').css({
		"animation-delay": '1s',
		"-webkit-animation-delay": '1s'
	});

	// Firefox, Chrome etc...
	$("#block-01 div i").addClass('slideInUp');
	$(".fa-firefox").css({
		"animation-delay": '2s',
		"-webkit-animation-delay": '2s'
	});
	$(".fa-chrome").css({
		"animation-delay": '2.5s',
		"-webkit-animation-delay": '2.5s'
	});
	$(".fa-android").css({
		"animation-delay": '3s',
		"-webkit-animation-delay": '3s'
	});

	// Hand down
	$("#block-01 .fa-hand-o-down, #bg").addClass('slideInDown').css({
		"animation-delay": '3.5s',
		"-webkit-animation-delay": '3.5s'
	});

	// Heart
	$(".fa-heart-o").addClass('fadeIn').css({
		"animation-delay": '4s',
		"-webkit-animation-delay": '4s'
	});


	// 各ブロックのスクロール処理
	var block = $(".inner-text"),
		Window = $(window);

	Window.scroll(function() {
		block.each(function() {
			if (Window.scrollTop() > $(this).offset().top - Window.height()) {
				$(this).addClass("fadeIn");
			}
		});
	});


	// アンカーリンク
	$("a[href^=#]").click(function() {
		var link = $(this).attr("href"),
			target = $(link === "#" || link === "" ? "html" : link);

		target.velocity("scroll", {
			duration: 400,
			easing: "ease-out"
		});
		return false;
	});
});



// 背景ブロック
$(function()　{
	var ua = navigator.userAgent.toLowerCase(),
		android = ua.indexOf("android") >= 0,
		iphone = ua.indexOf("iphone") >= 0,
		ipad = ua.indexOf("ipad") >= 0,
		ipod = ua.indexOf("ipod") >= 0;

	if (android || iphone || ipad || ipod) {}
	else {
		var block = $("#bg"), // 背景ブロック
			posY = block.offset(), // 座標
			Window = $(window); // ブラウザ

		Window.scroll(function() {
			if ( (Window.scrollTop() > block.scrollTop()) ) {
				var y =  -((Window.scrollTop() - posY.top) / 11), // 背景を動かす
					num = "60%" + y + "px";
				block.css("backgroundPosition", num);
			}
		});
	}
});