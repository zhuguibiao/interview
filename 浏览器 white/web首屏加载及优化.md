# web首屏加载

## 白屏加载和首屏加载时间的区别
  - 白屏：浏览器再输入url地址时候，一直到浏览器开始显示内容的时间。。

  - 首屏时间是指浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但在当前视窗的内容需要。

  - 白屏是首屏的子集。

## 被忽视的首屏加载
  用户体验对web网页来说很重要，而首屏加载是用户体验中最重要的环节之一，可能没有之一。然而现在的很多前端开发者，都没能重视对首屏加载的优化。

  正常来说，首屏加载时间不应该超过2s。有些成熟的网页比如京东和淘宝，虽然页面模块非常多且复杂，但通过优化，首屏加载时间却不长。

  如果一个页面完成首屏加载需要5秒以上，可能用户下次就从心理排斥打开这个页面。换言之，首屏加载时间对用户留存率影响很大。

## 如何计算白屏 or 首屏加载时间呢？
  白屏时间：
  ```js
  performance.timing.responseStart - performance.timing.navigationStart
  ```
  首屏时间：我们可以通过DOMContentLoad或者performance来衡量首屏时间，如下。
```js
// 方案一：
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('first contentful painting');
});
// 方案二：
performance.getEntriesByName("first-contentful-paint")[0].startTime
方案二是浏览器的一套计算规则，performance.getEntriesByName("first-contentful-paint")[0]会返回一个 PerformancePaintTiming的实例，结构如下：
{
  name: "first-contentful-paint",
  entryType: "paint",
  startTime: 507.80000002123415,
  duration: 0,
};
```
其实first-contentful-paint没有明确的衡量标准。大概意思就是第一屏的内容已经加载完成并且用户可以使用其中的功能，你可以自己给页面定义这个标准，比如某个重要请求完成的时刻，可能这样会更加准确，也可能有意义。

另外，chorme devTools的performances和lighthouse面板，都有FCP的数据。


## 如何优化首屏加载时间?
  1. cdn分发：
  
  2. 后端在业务层的缓存：

  3. 静态文件缓存方案：
      这个最常看到。现在流行的方式是文件hash+强缓存的一个方案。比如hash+ cache control: max-age=1年。
  4. 前端的资源动态加载：
      a. 路由动态加载，最常用的做法，以页面为单位，进行动态加载。
      b. 组件动态加载(offScreen Component)，对于不在当前视窗的组件，先不加载。
      c. 图片懒加载(offScreen Image)，同上。值得庆幸的是，越来越多的浏览器支持原生的懒加载，通过给img标签加上loading="lazy"来开启懒加载模式。   
  5. 利用好script标签的async和defer这两个属性
  6. 渲染的优先级
  7. 前端做一些接口缓存：
  8. 页面使用骨架屏和loading动画： 这个话治标不治本，是为了优化用户体验的。 
  9. SSR：可能加大了服务器的压力。 
  10. 引入http2.0：http2.0速度快 
  11. 选择先进的图片格式：使用 WebP 的图片格式来代替现有的jpeg和png，
    [WebP 相对于 PNG、JPG 有什么优势？](https://www.zhihu.com/question/27201061)
    
  12. 利用好http压缩：
  
  从文件大小角度的话：webpack 打包spliting code
