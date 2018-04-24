/**  
 * 排断对象类型
 */
const isType = (obj, type) => {
  if (typeof obj !== 'object') return false;
  const typeString = Object.prototype.toString.call(obj);
  console.log(typeString)
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
    case 'Promise':
      flag = typeString === '[object Promise]';
      break;
    case 'Buffer':
      flag = typeString === '[object Uint8Array]';
      break;
    default:
      flag = false;
  }
  return flag;
}


const arr = Array.of(3, 4, 5, 2)
console.log(isType(arr, 'Array'))

const obj = new Object()
console.log(isType(obj, 'Object'))

const set = new Set()
console.log(isType(set, 'Set'))

const map = new Map()
console.log(isType(map, 'Map'))

const promise = new Promise(function (params) { }, function (err) { })
console.log(isType(promise, 'Promise'))

const buffer = new Buffer('')
console.log(isType(buffer, 'Buffer'));

export default isType
