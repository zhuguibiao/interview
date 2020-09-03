# babel 原理

## tiny-compiler
  > tiny-compiler
1. tokenizer 把字符串代码转成token 数组

2. 再通过parser 讲token数组转成ast 树形结构

3. 用transformer方法 讲老的ast语法树转成需要的语法树

4. codeGenerator 将新生产的ast转成需要的代码字符串

5. compiler 就是将依次执行上述4步，组合，将老的代码转成需要的代码

## 参考链接
[看了就懂的 AST 和 Babel 工作流程](https://mp.weixin.qq.com/s/ov5NO55hHbWw_zUJZljdRw)