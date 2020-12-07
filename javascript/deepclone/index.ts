/**
 * 深copy
 * 1、传入obj
 * 2、考虑自身循环引用问题 ===> 第二个参数使用WeakMap
 * 3、所有属性利用Reflect.ownKeys
 *       Reflect.ownKeys方法用于返回对象的所有属性。
 *       基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
 *
 */
function deepClone(obj, map = new WeakMap()) {
  // 判断是否是obj
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // 判断map里面有没有自身
  if (map.has(obj)) {
    return map.get(obj);
  }
  const copy = Array.isArray(obj) ? [] : {};
  map.set(obj, copy);

  const keys = Reflect.ownKeys(obj);
  keys.forEach((key) => {
    copy[key] = deepClone(obj[key], map);
  });

  return copy;
}
