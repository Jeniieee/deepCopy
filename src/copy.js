/**
 * 深拷贝
 *
 * 缺陷: 比如拷贝Symbol、拷贝函数、循环引用
 */
export const deepCopyJson = source => {
  return JSON.parse(JSON.stringify(source));
};

/**
 * 请试着实现一个可以解决 deepCopyJson 中不能拷贝的Symbol、循环引用问题的拷贝函数，
 * 并且保证copy.test.js中的单元测试顺利通过。
 */
export const deepCopy = source => {
  let sourceStack = [];
  let targetStack = [];
  let _clone = obj => {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
    let target = {};
    if (Array.isArray(obj)) {
      target = [];
    }

    let index = sourceStack.indexOf(obj);
    if (index !== -1) {
      return targetStack[index];
    }
    sourceStack.push(obj);
    targetStack.push(target);

    for (let i in obj) {
      target[i] = _clone(obj[i]);
    }

    return target;
  };

  let result = _clone(source);
  // console.log(result);
  return result;
};
