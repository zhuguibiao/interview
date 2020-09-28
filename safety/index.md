# 前端安全问题

## 一、XSS： 
    xss：Cross site scripting，跨站脚本攻击，简称 CSS 由于和css文件同名，改为XSS了，意思就是黑客往html文件里注入script脚本
  ### 攻击分类
  1. 储存型：入库，比如名字起 '<script>alert(document.cookie)</script>'
  2. 反射型：'http://localhost:3000/?xss=<script>alert(document.cookie)</script>'
  3. 基于DOM：网络劫持在页面传输过程中修改 HTML 页面的内容，比如通过WiFi 路由器劫持的
  
  ### 如何阻止 XSS 攻击呢
  1. 服务器对输入脚本进行过滤或转码：
     <script>alert('你被xss攻击了')</script> &lt;script&gt;alert(&#39;你被xss攻击了&#39;)&lt;/script&gt;
  2. 充分利用 CSP
  3. 使用 HttpOnly 属性


## 二、 CSRF：
  全称：Cross-site request forgery **跨站请求伪造**，也就是说
  **CSRF 攻击就是黑客利用了用户的登录状态，并通过第三方的站点来做一些坏事**

  ### 如何防止 CSRF 攻击
  1. 充分利用好 Cookie 的 SameSite 属性
  2. 验证请求的来源站点
  3. CSRF Token


## 三、点击拦截：
## 四、iframe：
  
## 参考文章讲解
[前端安全问题汇总（实战)](https://zhuanlan.zhihu.com/p/83865185)

[8大前端安全问题（上)](https://insights.thoughtworks.cn/eight-security-problems-in-front-end/)

[8大前端安全问题（下)](https://insights.thoughtworks.cn/eight-security-problems-in-front-end-2/)

