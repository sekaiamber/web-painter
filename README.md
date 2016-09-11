# web-painter

*Ver. pre-alpha*

This is a WYSIWYG web page editor built by Electron.

[点击进入项目首页](https://sekaiamber.github.io/web-painter/)

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

### 一些预处理任务

因为这个项目将会输出文件，我们会将一些bundle预处理好，这样可以防止在程序中进行过多的处理，浪费时间。

现在有这么些预处理任务：
* 样式文件预处理，这个处理将一些预设样式和标准样式统统打包进入一个样式文件中，这个文件将存放到`app/htmlTemplates/export/bundle.css.wpexport`中。

```bash
$ node utils/getBundleCss.js
```

### 开发环境

0. 启动静态文件代理

```bash
$ npm run dev-assets
```

这一步会将`assets`目录代理到`http://0.0.0.0:8889`以给下面的server使用

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
