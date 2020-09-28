# webpakc优化
# 一、优化构建速度（打包时的优化）
1.2 使用DllPlugin减少基础模块编译次数
1.3 使用HappyPack开启多进程Loader转换
1.4 使用ParallelUglifyPlugin开启多进程压缩JS文件
## 1.1、打包时开启缓存
    缓存开启时，会在node_modules下创建.cache的文件夹，缓存文件会存放在里面。开启缓存后，二次构建代码时会优化打包时间。
 1. 像一些webpack loader都会自带缓存处理
    如：**babel-loader** 开启缓存 
 ```js
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader?cacheDirectory',
        },
    ]
```
 2. 代码压缩时候，可以使用terser-webpack-plugin开启缓存
 3. 使用 cache-loader 或者 hard-source-webpack-plugin

### 1.2、缩小构建的目标
 webpack使用loader解析的时候，是不是所有的文件都需要处理么? 其实不是的，比如 clbabel-loader 不解析 node_modules，所以我们需要尽可能的少解析构建模块
 1. loader使用时 添加exclude，不解析哪些文件。
 2. 减少文件的搜索范围
    1. 优化resolve.modules配置（减少模块搜索层级）
    2. 优化resolve.mainFields配置
    3. 优化resolve.extensions配置
    4. 合理使用alias
    ``` js
    module.exports = {
        resolve:{
            alias:{
                react:path.resolve(__dirname,'./node_modules/react/dist/react.min.js')
            },
            // 查找路径只在node_modules
            modules:[path.resolve(__dirname,'node_modules')],
            // import './index'文件后缀，里面的数组少点好，多的话搜索时间更多了。
            extensions:['.js'·,
            // 入口文件
            mainFields:['main'],
        }
    }
    ```

# 二、优化开发体验
2.1 使用自动刷新
2.1.1 Webpack监听文件
2.1.2 DevServer刷新浏览器
2.2 开启模块热替换HMR

# 三、优化输出质量-压缩文件体积
## 3.1 区分环境--减小生产环境代码体积
## 3.2 压缩代码-JS、ES、CSS
## 3.3 使用Tree Shaking剔除JS死代码

## 3.4 scope hosting
  webpack转换后的模块会带上一层包裹（自运行函数）

# 四、优化输出质量--加速网络请求
4.1 使用CDN加速静态资源加载
4.2 多页面应用提取页面间公共代码，以利用缓存
4.3 分割代码以按需加载


# 五、优化输出质量--提升代码运行时的效率
5.1 使用Prepack提前求值
5.2 使用Scope Hoisting

# 六、使用输出分析工具

# 七、其他Tips


# webpack优化整理

