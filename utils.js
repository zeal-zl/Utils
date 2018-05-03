
// 将连字符 - 后一位字母 转换为大写字母
const camelize = (str) => {
  const reg = /-(\w)/g
  return str.replace(reg, (...arg) => arg[1] ? arg[1].toUpperCase() : '')
}


console.log(camelize('hello-world'))

