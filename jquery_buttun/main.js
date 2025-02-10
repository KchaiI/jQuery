$(".button").click(function() {
    if($(this).hasClass("cool")) {
        $(this).removeClass("cool").addClass("cute");
    } else {
        $(this).removeClass("cute").addClass("cool");
    }
});
