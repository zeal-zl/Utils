/**
 * *debounce 防抖
 * 
 * 作用是在短时间内多次触发同一个函数，只执行最后一次，或者只在开始时执行。
 * 用户拖拽改变窗口大小，触发 resize 事件为例
 * 
 * @param {Funtion} fn 回调函数
 * @param {Number} delay 延迟事件
 * @param {Boolean} immediate 是否立即执行
 */

// 基础版
function debounceBase (fn, delay) {
  var timer
  return function () {
    // 获取函数的作用域和变量
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay)
  }
}

// 基础版 Es6
function debounceES6 (fn, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay)
  }
}

// 立即执行
function debounceImmediate (fn, delay, immediate) {
  let timer
  return function (...args) {
    timer && clearTimeout(timer)
    if (immediate) {
      const doNow = !timer
      timer = setTimeout(() => { timer = null }, delay)
      doNow && fn.apply(this, args)
    } else {
      timer = setTimeout(() => { fn.apply(this, args) }, delay)
    }
  }
}


function resizeEvent () {
  console.log('触发resize事件')
}
// window.onresize = debounceBase(resizeEvent, 400, true)
// window.onresize = debounceES6(resizeEvent, 400, true)
window.onresize = debounceImmediate(resizeEvent, 400, true)
