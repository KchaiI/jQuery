$(window).resize(function() {
	width_disp();
});
 
$(document).ready(function() {
	width_disp();
});
 
function width_disp() {
	if (window.innerWidth > 1000) {
		$("p").text("画面幅は1000ピクセル以上です");
	} else if (window.innerWidth > 800) {
		$("p").text("画面幅は800ピクセル以上です");
	} else if (window.innerWidth > 600) {
		$("p").text("画面幅は600ピクセル以上です");
	} else {
		$("p").text("画面幅は600ピクセルより小さいです。");
	}
}