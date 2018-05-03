/**  
 * 排断对象类型
 * 
 * 排断数据类型
 * typeof obj   // 主要识别原始类型
 * obj instanceof objType // 主要识别对象
 * 
 * Array.isArray(arr)  // 识别数组
 * Object.prototype.toString.call(data) // 所有
 * 
 * 
 * 封装通用的排断类型函数
 * isObjectType
 * isTypeComm 
 */

// 用于测试类型
const str = ''
const num = 1
const boo = false
const arr = Array.of(3, 4, 5, 2)
const fun = () => { }
const obj = new Object()
const set = new Set()
const map = new Map()
const promise = new Promise(function (resolve, reject) { })
const buffer = new Buffer('')


// 所有对象的类型
const isObjectType = (obj, type) => {
  if (typeof obj !== 'object') return false;
  const typeString = Object.prototype.toString.call(obj);
  let flag;
  switch (type) {
    case 'Object':
      flag = typeString === '[object Object]';
      break;
    case 'Array':
      flag = typeString === '[object Array]';
      break;
    case 'Date':
      flag = typeString === '[object Date]';
      break;
    case 'RegExp':
      flag = typeString === '[object RegExp]';
      break;
    case 'Set':
      flag = typeString === '[object Set]';
      break;
    case 'Map':
      flag = typeString === '[object Map]';
      break;
    case 'WeakSet':
      flag = typeString === '[object WeakSet]';
      break;
    case 'WeakMap':
      flag = typeString === '[object WeakMap]';
      break;
    case 'Promise':
      flag = typeString === '[object Promise]';
      break;
    case 'Uint8Array':
      flag = typeString === '[object Uint8Array]';
      break;
    default:
      flag = false;
  }
  return flag;
}

console.log('---------------------- 分隔符 以下是常用的操作 ----------------------')

/**
 * 排断是否对象
 * 
 * @param {any} obj 
 * @returns 
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * 排断值是否是指定的类型
 * 
 * @param {any} data 值
 * @param {any} type 指定的类型
 * @return {Boolean}
 */
function isTypeComm (data, type) {
  return Object.prototype.toString.call(data) === `[object ${type}]`
}

/** 
 * 获取值的原始类型
 * 
 * @param {any} 
 * @return {String} 
 */
function toRawType (value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}
