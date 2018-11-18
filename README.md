# Vue.js技术栈搭建cnode社区

## 项目介绍

单页应用。使用vue-cli搭建项目脚手架，axios发送请求，vue-router管理路由

api由[cnode社区](https://cnodejs.org/api)提供

预览地址[https://chenyuhao.top/cnode/dist/](https://chenyuhao.top/cnode/dist/)

## 组件：

- Header: 头部导航栏
- PostList: 首页数据列表
- Pagination: 分页组件
- Article: 文章详情页
- Userinfo: 用户详情页
- SlideBar: 用户信息侧边栏

在文章的侧边栏点击链接，发现路由更新但页面没有更新。

[官方文档解释](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96)

> 当使用路由参数时，例如从 `/user/foo` 导航到 `/user/bar`，**原来的组件实例会被复用**。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。**不过，这也意味着组件的生命周期钩子不会再被调用**。

解决方法：

监听路由变化，重新获取数据

```javascript
  watch: {
    $route(to, from) {
      this.getArticleData();
    }
  }
```

项目总结：

1. 能够使用vue-cli搭建脚手架进行开发，webpack配置还需要进一步学习。

2. 熟悉单文件组件的写法，vue-router的使用，es6 Module语法

3. 对数据双向绑定，组件间的数据传输，生命周期，指令、计算属性等有了一定的认识。

   
第一个vue项目，涉及的知识面还是很全的。算是入门vue了，前路漫漫，仍需继续努力 : )