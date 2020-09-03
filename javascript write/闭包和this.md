```js 
let x = 'x'
let a =1
function f2(x){
    return x+a
}
{
    let a = 2
    f2('x')
}
```
a是环境不是参数，所以看函数f2定义的时候a是什么。
a是定义时的a,不是执行时的a
## 闭包
如果在函数里面可以访问外面的变量，那么
这个函数+这些变量=闭包

```js
for(var i =0;i<6;i++){
    setTimeout(() => {
        console.log(i)
    }, 0);
}
```

打印6 6 6 6 6 6 
1. 把var改成let
2. 立即执行函数

```js
for(var i =0;i<6;i++){
    !function(c){
    setTimeout(() => {
        console.log(c)
    }, 0);
    }(i)
}
```

### 闭包的特点
- 能让一个函数维持住一个变量

### 对象是穷人的闭包
```
var obj = {
    i:0,
    fn(){
        console.log(this.i)
    }
}
obj.fn()
```
维持一个变量

### 闭包是穷人的对象

```js
function Person(name,age){
    return function(key){
        if(key==='name'){
            return name
        }
        if(key==='age'){
            return age
        }
    }
}

var c = Person('jack',23)
console.log(c('name'))
console.log(c('age'))
```
用闭包来模拟一个对象

## this

### this的五种绑定方法
    
#### 1、默认绑定
    this默认绑定我们可以理解为函数调用时无任何调用前缀的情景，它无法应对我们后面要介绍的另外四种情况，所以称之为默认绑定，默认绑定时 this指向全局对象（非严格模式）：
> 在严格模式环境中，默认绑定的this指向undefined
> 
#### 2、隐式绑定
>什么是隐式绑定呢，如果函数调用时，前面存在调用它的对象，那么this就会隐式绑定到这个对象上
```js
    function Fn() {};
    Fn.prototype.name = '时间跳跃';
    function fn() {
        console.log(this.name);
    };
    let obj = new Fn();
    obj.func = fn;
    let obj1 = {
        name: '帅哥彪',
        o: obj
    };
    obj1.o.func() // 时间跳跃
```
这里输出时间跳跃，虽然obj对象并没有name属性，但顺着原型链，找到了产生自己的构造函数Fn，由于Fn原型链存在name属性，所以输出时间跳跃了。
**番外------作用域链与原型链的区别：**
- 当访问一个变量时，解释器会先在当前作用域查找标识符，如果没有找到就去父作用域找，作用域链顶端是全局对象window，如果window都没有这个变量则报错。

- 当在对象上访问某属性时，首选i会查找当前对象，如果没有就顺着原型链往上找，原型链顶端是null，如果全程都没找到则返一个undefined，而不是报错。
#### 3、显式绑定

#### 4、new绑定

#### 5、箭头函数绑定

### 绑定的优先级
> 五种绑定优先级为，**显式绑定** > **隐式绑定** > **默认绑定，，，，new绑定** > **隐式绑定** > **默认绑定。因为我们不可能new一个函数的同时还用显示绑定，所以显示绑定与new没有可比性。**

