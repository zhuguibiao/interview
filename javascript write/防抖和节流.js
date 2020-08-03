/* 节流： throttle
 * 概念：指定时间间隔内只会执行一次任务
 * 如一秒内我输入100次，但是结果是我只执行一次
 */

/* 防抖：debounce
 * 概念：延迟一段时间执行函数
 * 如我连续输入100次，只要输入的间隔没有超过500ms 就不执行，最后执行一次。
 */

function debounce(fn, wait) {
  let timer = null;
  return () => {
    console.log(this);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  };
}

// 时间戳版
function throttle(func, wait) {
  var previous = 0;
  return function () {
    let now = Date.now();
    let context = this;
    let args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
}

// 时间到之后把time设置为null，然后才能执行下次
function throttle2(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
}

var throttle3 = function (func, delay) {
  var timer = null;
  var startTime = Date.now();
  return function () {
    var curTime = Date.now();
    var remaining = delay - (curTime - startTime);
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  };
};

var a = debounce(() => {
  console.log(3);
}, 3000);
a();
a();
a();
a();
a();
a();
