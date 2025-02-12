$(window).resize(function() {
	timer = setTimeout(function() {
		width_disp();
	}, 200);
});

$(window).resize(function() {
	width_disp();
});
 
$(document).ready(function() {
	width_disp();
});
 
function width_disp() {
    let img = $("#resize-img");

	if (window.innerWidth > 1000) {
        $(".comment").text("画面幅は1000ピクセル以上です");
        img.attr("src", "img/Descktop.png");
	} else if (window.innerWidth > 800 || window.innerWidth <= 1000) {
        $(".comment").text("画面幅は800ピクセル以上です");
        img.attr("src", "img/Laptop.png");
	} else if (window.innerWidth > 600 || window.innerWidth <= 800) {
        $(".comment").text("画面幅は600ピクセル以上です");
        img.attr("src", "img/iPad.png");
	} else {
        $(".comment").text("画面幅は600ピクセルより小さいです。");
        img.attr("src", "img/SmartPhone.png");
	}
}