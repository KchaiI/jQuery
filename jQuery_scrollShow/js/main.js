$(function(){
    $(".inview").on("inview", function (event, isInView) {
        if (isInView) {
            $(this).addClass("is-show");
            console.log("t");
        } else {
            $(this).removeClass("is-show");
            console.log("not");
        }
    });
});