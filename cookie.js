/**
 * cookie常用操作
 * @author Lyle
 */


/**
 * 获取cookie
 * @param {String} name
 * @return {String} 
 */
// base
function getCookieBase (name) {
  name = name + '='
  var ca = document.cookie.split('; ')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim()
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
  }
  return ''
}

// Map
function getCookieMap (name) {
  var ca = document.cookie.split('; ')
  let arr = []
  for (let it of ca) {
    arr.push(it.split('='))
  }
  const map = new Map(arr)
  return map.get(name)
}

// Reg
function getCookieReg (name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr
  if (arr = document.cookie.match(reg)) return arr[2]
  else return null;
}



/**
 * 设置cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} exdays
 */
function setCookie (name, value, exdays) {
  const d = new Date(name, value, exdays)
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toGMTString()
  document.cookie = name + '=' + value + '; ' + expires
}


/**
 * 删除Cookie
 * @param {String} name
 */
function delCookie (name) {
  let value = getCookieBase(name)
  if (!value) return false
  setCookie(name, value, -1)
}

