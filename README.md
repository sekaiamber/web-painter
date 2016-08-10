# web-painter

This is a WYSIWYG web page editor built by Electron.

这个项目是我用来熟悉Electron的，也许会变成烂尾楼。。

## 开发及部署

### 安装依赖

这儿除了`Electron`大致使用了以下框架，所以要做一些配置：
* React
* Webpack

```bash
$ cd path/to/repo
$ npm install
$ npm start
```

### 开发环境

1. 打开Webpack-dev-server，这可以让我们的app代码时实时更新，替换样式之类的再也不用重启app啦！

```bash
$ npm run dev-file
```

2. 启动Electron

```bash
$ npm run dev-app
```

### 部署

1. 同理，首先要对js文件进行优化打包。

```bash
$ npm run deploy-file
```

2. 然后就可以启动Electron啦

```bash
$ npm run deploy-app
```


推荐使用cnpm

## LICENSE

Copyright 2015-2016 Xu Xiaomeng(@sekaiamber)

Released under the MIT and GPL (version 2 or later) Licenses.
