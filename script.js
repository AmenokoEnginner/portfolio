$(function(){
  // メニューバーを固定
  // メニューバーの初期位置を代入
  var navPos = $('#menu').offset().top;
  // ブラウザをスクロール
  $(window).scroll(function() {
    // スクロール量とメニューバーの初期位置を比較
    if ($(window).scrollTop() > navPos) {
      // メニューバーをブラウザ上部に固定
      $('#menu').css('position', 'fixed');
      // メニューバーの下部に影を付ける
      $('#menu').css('box-shadow', '0 1px 4px #ddd');
    } else {
      // メニューバーを通常の位置に配置
      $('#menu').css('position', 'static');
      // メニューバーの影を消去
      $('#menu').css('box-shadow', 'none');
    }
  });

  // listがクリックされた時の処理を関数化
  var scroll = function() {
    // クリックされた要素のhrefを取得
    var list = $(this).attr('href');
    // スクロール処理
    var target = $(list).offset().top;

    $('html, body').animate({
      scrollTop: target - 50
    }, 300);
  };

  // 処理の実行
  $('#menu li').click(scroll);
  $('#footer li').click(scroll);
});
