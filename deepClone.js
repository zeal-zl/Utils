/**  
 * *deep clone 深拷贝
 * 
 * 1、JSON解析反解析 
 * ps:
 * 1、无法实现对函数 、RegExp等特殊对象的克隆
 * 2、无法拷贝原对象原型链上的属性和方法 构造函数指向错误
 * 3、稀疏数组复制错误
 * 4、对象的循环引用会抛出错误
 * 
 * 2、deepClone
 */

// 1、JSON
function Person (name) { this.name = name; }
const Messi = new Person('Messi');

const oldObj = {
  a: 'aaa',
  b: [1, 2, 3],
  c: new Array(3),
  d: { f: 'fff' },
  f: function () { console.log('hello world!') },
  g: Messi,
  r: new RegExp('ab+c', 'i'),
}

const newObj = JSON.parse(JSON.stringify(oldObj))

/* 
console.log('newObj ==>', newObj)
console.log('oldObj ==>', oldObj)

// 无法复制函数
console.log('复制函数 ==>', newObj.g, oldObj.g);             // undefined  [Function: say]
// 稀疏数组复制错误
console.log('复制稀疏数组 ==>', newObj.c[0], oldObj.c[0]);   // null   undefined
// 无法复制正则对象
console.log('复制正则对象 ==>', newObj.r, oldObj.r);         // {} /ab+c/i
// 构造函数指向错误
console.log('构造函数指向 ==>', newObj.g.constructor, oldObj.g.constructor);   // [Function: Object] [Function: person]
 */

// 排断对象类型
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


/**
* deepClone
* @param  {object} parent  需要进行克隆的对象
* @return {object}        深克隆后的对象
*/
const deepClone = parent => {
  // 维护两个储存循环引用的数组
  const parents = []
  const children = []

  const _clone = parent => {
    if (parent === null) return null;
    if (typeof parent !== 'object') return parent;

    let child, proto;

    if (isType(parent, 'Array')) {
      
      console.log(11)
      // 对数组做特殊处理
      child = [];

    } else if (isType(parent, 'RegExp')) {

      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;

    } else if (isType(parent, 'Date')) {

      // 对Date对象做特殊处理
      child = new Date(parent.getTime());

    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);

    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }

    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i]);
    }

    return child;
  }

  return _clone(parent);
}


const oldArr = [1, 2, 3, 4, 5, 6, 7]
console.log(deepClone(oldArr))
