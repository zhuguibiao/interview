function Event() {
  // 所有事件对象
  this._events = Object.create(null);
}
/**
 * 绑定事件方法
 * @param name 绑定事件名称
 * @param callback 回调函数
 */
function on(name, callback) {
  if (!this._events[name]) {
    this._events[name] = [callback];
    return;
  }
  this._events[name].push(callback);
}

/**
 * 触发事件方法
 * @param name 绑定事件名称
 * @param callback 回调函数
 */
function emit(name, ...args) {
  if (this._events[name]) {
    // 循环执行函数，并将 this 指回 Event 实例
    this._events[name].forEach((fn) => fn.call(this, ...args));
  }
}

/**
 * 解除
 * @param name 绑定事件名称
 * @param fn 不传删除所以，传删除对应事件的回调函数
 */
function off(name, fn) {
  if (this._events[name]) {
    // 过滤掉当前传入的要移除的 callback
    this._events[name] = this._events[name].filter((item) => {
      return item !== fn;
    });
  }
}

Event.prototype.addListener = Event.prototype.on = on;
Event.prototype.emit = emit;
Event.prototype.off = off;


var events = new Event();

function a(...e) {
  console.log("a" + e);
}
function b(e) {
  console.log("b" + e);
}
events.on("click", a);
events.on("click", b);
events.off("click", b)

events.emit("click", 12, 3);
