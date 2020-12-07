"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };

function thinFace(value) {
  console.log("1-瘦脸工厂方法");
  return function () {
    console.log(`4-我是瘦脸的装饰器，要瘦脸${value}`);
  };
}
function IncreasingEyes(value) {
  console.log("2-增大眼睛工厂方法");
  return function () {
    console.log(`3-我是增大眼睛的装饰器，要${value}`);
  };
}
let Girl = class Girl {};
Girl = __decorate([thinFace("50%"), IncreasingEyes("增大一倍")], Girl);
