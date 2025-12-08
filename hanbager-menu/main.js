$(function(){
  $('.hamburger_button').on('click', function() {
    $(this).toggleClass('active');     // ハンバーガーを×に
    $('#js-nav').toggleClass('active'); // メニュー表示ON/OFF
    return false;
  });
});
