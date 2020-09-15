import { name, hobbies } from "./ESmodule2.js";
console.log(name, hobbies); //William ["coding"]
//name 和 hobbie 都会被模块内部的变化所影响
setTimeout(() => {
  console.log(name, hobbies); //Yvette ["coding", "writing"]
}, 500);
