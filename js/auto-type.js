'use strict';
function AutoType(dom, msg, timing) {
  var arr = msg.split('');
  var inc = 0;
  var len = arr.length;
  timing = timing || 200;
  var loop = function () {
    dom.innerHTML += arr[inc];
    inc += 1;
    console.log(inc);
    if (inc == len) {
      clearTimeout(loop);
    } else {
      window.setTimeout(loop, timing);
    }
  };
  window.setTimeout(loop, timing);
};