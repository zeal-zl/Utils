/**  
 * *shallowClone 浅拷贝
 */

function shallowClone (obj, target = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      target[key] = obj[key];
    }
  }
  return target
}

// 被克隆对象
const oldObj = {
  a: 1,
  b: ['e', 'f', 'g'],
  c: { h: { i: 2 } }
}

const oldArr = [1, 'ss', ['33', { ff: 'ff' }]]

const newObj = shallowClone(oldObj)
console.log(newObj)

const newArr = shallowClone(oldArr)
console.log(newArr)
