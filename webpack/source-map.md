# SourceMap 使用教程

## 一、前言
在前端的工作中主要是用来解决以下三个方面出现的 debug 问题：

      a. 代码压缩混淆后
      b. 利用 sass 、typeScript 等其他语言编译成 css 或 JS 后
      c. 利用 webpack 等打包工具进行多文件合并后

上面三种情况，我们在调试时都是没办法像调试源码般轻松，这就需要 SourceMap 帮助我们在控制台中转换成源码，从而进行 debug 。

## 二、概念
   > SourceMap 其实就是一个存储源代码与编译代码对应位置映射的信息文件

## 三、原理

实际上就是一个 JSON 键值对，利用 VLQ编码与特定的规则存储位置信息。
这里面的逻辑有兴趣的可以看看阮老师的这篇文章[《 JavaScript Source Map 详解 》](https://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
```js
{
　　　　version : 3,        // Source map的版本
　　　　file: "out.js",      // 转换后的文件名
　　　　sourceRoot : "",   // 转换前的文件所在的目录。如果与转换前的文件在同一目录，该项为空
　　　　sources: ["foo.js", "bar.js"],   // 转换前的文件。该项是一个数组，表示可能存在多个文件合并
　　　　names: ["src", "maps", "are", "fun"],   // 转换前的所有变量名和属性名
　　　　mappings: "AAgBC,SAAQ,CAAEA"  // 记录位置信息的字符串
}
```
其实不用懂原理直接使用就好，毕竟 .map 文件也是工具生成的，不用自己编写。

## 四. webpack中的使用  
  在 webpack 中使用 source map，是通过配置中的[ devtool ](https://webpack.docschina.org/configuration/devtool/#devtool)字段来设置source map类型。

### **webpakc中的source map关键字**
``` html
  eval：使用eval包裹块代码  
  source map：产生.map文件
  cheap：不包含列信息
  inline：将.map作为dataURL嵌入到js文件内部
  module：包含loder的sourcemap
```
### **webpakc中的source map类型**
  大概有26种类型，其实就是根据上面关键字的功能进行的排列组合，分别生成不同类型的Source Map，实际应用中可以根据需要进行配置。
  
  **开发环境一般推荐：**
  - eval - 每个模块都使用 eval() 执行，并且都有 //@ sourceURL。此选项会非常快地构建。主要缺点是，由于会映射到转换后的代码，而不是映射到原始代码（没有从 loader 中获取 source map），所以不能正确的显示行数。

  - *** eval-source-map - 每个模块使用 eval() 执行，并且 source map 转换为 DataUrl 后添加到 eval() 中。初始化 source map 时比较慢，但是会在重新构建时提供比较快的速度，并且生成实际的文件。行数能够正确映射，因为会映射到原始代码中。它会生成用于开发环境的最佳品质的 source map。

  - eval-cheap-source-map - 类似 eval-source-map，每个模块使用 eval() 执行。这是 "cheap(低开销)" 的 source map，因为它没有生成列映射(column mapping)，只是映射行数。它会忽略源自 loader 的 source map，并且仅显示转译后的代码，就像 eval devtool。

  - eval-cheap-module-source-map - 类似 eval-cheap-source-map，并且，在这种情况下，源自 loader 的 source map 会得到更好的处理结果。然而loader source map 会被简化为每行一个映射(mapping)。

  **生产环境一般不推荐使用**
  

### **实战**

在webpack配置文件webpack.config.js中设置devtool即可生成Source Map文件：

```js
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map"
};
``` 
