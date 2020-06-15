// (function(doc, win) {
//     var docEl = doc.documentElement,
//       resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//       recalc = function() {
//         var clientWidth = docEl.clientWidth;
//         if (!clientWidth) return;
//         docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
//       };
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
//   })(document, window);
  
(function (doc, win) {
  var html = doc.getElementsByTagName("html")[0],
      docEl = doc.documentElement,
      dpr = win.devicePixelRatio,
      screenWidth = win.screen.width,
      screenHeight = win.screen.height,
      clientWidth = doc.documentElement.clientWidth,
      clientHeight = doc.documentElement.clientHeight;
  var htmlFontSize;
  if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      htmlFontSize = screenWidth * 2 / 10;
  }
  else {
      if (win.orientation == 0 || win.orientation == 180) {
          //竖屏
          /**
           * 情况仅针对2倍缩小
           * window.screen.width：浏览器给回该值可能是分辨率，也可能是分辨率/dpr(即基数)后的值
           * document.documentElement.clientWidth：
           * 一般情况下，window.screen.width、document.documentElement.clientWidth为倍数关系，都是基数的倍数，
           * 而后者的值受浏览器的搜索框等影响
           */
          var w = screenWidth;
          if (screenWidth >= clientWidth && clientWidth != 0) {
              w = screenWidth / dpr;
          }


          htmlFontSize = w * 2 / 10;

          if (w >= clientWidth && clientWidth != 0) {
              htmlFontSize = w / 10;
          }
      }
      else {
          var h = screenHeight;
          if (screenHeight >= clientHeight) {
              h = screenHeight / dpr;
          }

          htmlFontSize = h * 2 / 10;

          if (h >= clientHeight) {
              htmlFontSize = h / 10;
          }

      }

      htmlFontSize += "px";

      html.setAttribute("data-dpr", win.devicePixelRatio.toString());
      html.style.fontSize = htmlFontSize;

  }

  docEl.setAttribute('data-dpr', dpr.toString());
  docEl.style.fontSize =htmlFontSize+ 'px';
})(document, window);
