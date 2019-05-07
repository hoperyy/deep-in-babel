# 多端统一开发研究

## 简介

该项目致力于多端统一框架研究，包括但不限于：现有的 taro / chameleon 等多端框架原理理解、自研一套完整的多端框架、各种分析文章等。

以下为该研究项目的各项安排。

## 项目拆分思维导图

![](img/progress.png)

## 阶段任务拆解

+   深入 babel 插件开发

    +   练习 1

        +   参考

            +   [深入Babel，这一篇就够了](https://juejin.im/post/5c21b584e51d4548ac6f6c99) “Babel插件实践” 部分。
            +   [Babel 插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

        +   答题地址：https://github.com/hoperyy/water/issues/1

        +   作业

            完成精准 import 转码：

            ```js
            import { Select as MySelect, Pagination } from 'xxx-ui';
            // import UI2 from 'xxx-ui';
            import * as UI from 'xxx-ui';
            ```

            到 

            ```js
            import MySelect from 'xxx-ui/Select/Select.js';
            import Pagination from 'xxx-ui/Pagination/Pagination.js';
            // import UI2 from 'xxx-ui';

            import * as UI from 'xxx-ui';
            ```

            **类似即可，自由发挥**

    +   练习 2

        +   参考 [懂编译真的可以为所欲为|不同前端框架下的代码转换](https://mp.weixin.qq.com/s?__biz=MzU4MDUxOTI5NA==&mid=2247484382&idx=1&sn=662c03594523cf3c9f5cc97eb7436d23&chksm=fd54d7cfca235ed92be315e19563da1cc1dd42cd372372376892e36991f23d292dabf00cbaf2&mpshare=1&scene=1&srcid=0418YWwl3FOxlg6USmo0ouwJ#rd)

        +   答题地址：https://github.com/hoperyy/water/issues/3

        +   作业

            完成 vue 转 react

        

## 分享产出

+   [babel 插件开发全面理解](https://github.com/hoperyy/water/issues/4)(2019-05-05)

## 参考资料

+   [AST 抽象语法树](http://jartto.wang/2018/11/17/about-ast/)
+   [@babel/types 使用文档](https://babeljs.io/docs/en/babel-types)
+   [babylon 文档](https://github.com/babel/babylon/blob/master/ast/spec.md)
+   [懂编译真的可以为所欲为|不同前端框架下的代码转换](https://mp.weixin.qq.com/s?__biz=MzU4MDUxOTI5NA==&mid=2247484382&idx=1&sn=662c03594523cf3c9f5cc97eb7436d23&chksm=fd54d7cfca235ed92be315e19563da1cc1dd42cd372372376892e36991f23d292dabf00cbaf2&mpshare=1&scene=1&srcid=0418YWwl3FOxlg6USmo0ouwJ#rd)
+   [剖析Babel——Babel总览](http://www.alloyteam.com/2017/04/analysis-of-babel-babel-overview/)
+   [Babel 插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)
+   [深入Babel，这一篇就够了](https://juejin.im/post/5c21b584e51d4548ac6f6c99)
+   [小程序框架对比](https://mina.wiki/eco/framework.html)
+   [taro 原理总结](https://www.jishuwen.com/d/2xm1)