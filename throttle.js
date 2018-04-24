/** 
 * *throttle 节流
 * 
 * 节流是在一段时间内只允许函数执行一次。
 * 应用场景如：输入框，可以限定用户在输入时，只在每两秒钟响应一次联想。
 */

// 时间戳实现
function throttleTimestamps (func, delay) {
  var prev = Date.now()
  return function (...args) {
    var now = Date.now()
    if (now - prev >= delay) {
      func.apply(this, args)
      prev = Date.now()
    }
  }
}

// 定时器实现
function throttleTimer (func, delay) {
  var timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, delay)
    }
  }
}


const input = document.getElementById('input')
const inputMsg = document.getElementById('inputMsg')

input.onkeyup = throttleTimer(keyupEvent, 1000)

function keyupEvent () {
  let value = input.value
  inputMsg.textContent = value
}



