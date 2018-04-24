/**
 * 扁平化数组
 * @param {Array} arr 数组
 * @param {Number} depth 深度
 */

function flattenArr (arr) {
  let result = []
  for (let it of arr) {
    if (Array.isArray(it)) {
      result.push(...flattenArr(it))
    } else {
      result.push(it)
    }
  }
  return result
}

const arr1 = [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]
console.log(flattenArr(arr1))


function flattenDepth (arr, depth = 1) {
  let result = []
  for (let it of arr) {
    if (Array.isArray(it) && depth > 0) {
      result.push(...flattenDepth(it, --depth))
    } else {
      result.push(it)
    }
  }
  return result
}

const arr2 = [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]
console.log(flattenDepth(arr2))
console.log(flattenDepth(arr2, 1))
console.log(flattenDepth(arr2, 2))
console.log(flattenDepth(arr2, 3))
console.log(flattenDepth(arr2, 4))
console.log(flattenDepth(arr2, 5))
console.log(flattenDepth(arr2, 6))
console.log(flattenDepth(arr2, 7))
console.log(flattenDepth(arr2, 8))
console.log(flattenDepth(arr2, 9))


