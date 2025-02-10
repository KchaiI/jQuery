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
        img.attr("src", "img/Descktop.png");
	} else if (window.innerWidth > 800) {
        img.attr("src", "img/Laptop.png");
	} else if (window.innerWidth > 600) {
        img.attr("src", "img/iPad.png");
	} else {
        img.attr("src", "img/SmartPhone.png");
	}
}