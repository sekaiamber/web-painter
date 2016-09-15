# 本项目中的模块绑定，依赖分析，静态文件访问以及App打包详解

Electron主要分为两个进程（主进程和渲染进程），中间通过ipc模块通信，而当渲染进程采用了React和Webpack之后，这两者的编程风格会极其不同：React使用JSX而主，而主进程是普通的NodeJS写法，中间一些细节可以随便发挥。

## DEV环境下的渲染进程

我在DEV环境下使用的是Webpack DevServer做开发环境，普通的Webpack配置在这儿行不通，编译出来的文件放到Electron环境下跑起来会报错，不是electron模块找不到就是node自带的模块找不到，解决方法现在开来很简单，在Webpack的配置中增加：

```javascript
target: "electron-renderer"
```

这个做法是新版本的Webpack才加入的，并且官网没有任何提示，实际上是做了一些配置，这些配置可以在Webpack的源码中找到：[这部分](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsApply.js#L117)。

其实主要做的配置是将一些解决一些公共模块的依赖问题。

## 静态文件访问

项目中的很多文件都是静态文件，并且不必要被Webpack编译（很多CSS相关的样式静态文件将被Webpack编译，比如字体啥的），这部分文件必须想个办法能被Webpack编译后的文件访问到，主要是因为Webpack编译后的URL层级结构并不能像真实文件目录那样排列，而Electron的Node代码访问文件确是按照真实文件目录寻找，这就造成了某种冲突。

我的解决方式是，在DEV环境下开一个静态文件路由（这儿使用的是8889端口），将`:8889/assets/*`的访问全部映射到了`/assets`目录下，然后使用DevServer的Proxy将`:8888/assets/*`的访问全部映射到8889端口。

而在DEPLOY环境下，将编译后的文件默认排列在`dist/`下，然后将`/assets`目录复制到`dist/assets`，使得两种方式的实际效果相同，并且静态文件能被正确地访问。

## DEPLOY环境下的打包APP

这儿我选择使用两次Webpack分别编译Electron两个进程的代码

渲染进程跟DEV的配置大致相同，增加了一些压缩环节，另外，Bootstrap的源代码默认了`jQuery`被绑在`window.jQuery`上，使得`jQuery`成为一个公共变量，这一点在DEV模式下是无所谓的，因为我手动在项目启动的文件中将这一步做掉了，但是在DEPLOY下不成功，所以需要加入公共变量的声明：

```javascript
plugins: [
  ...
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
]
```

而主进程的Webpack配置有所不同：

```javascript
target: "electron"
```

为了构造一个dist环境，我重写了一个`package.deploy.json`，这个文件将随着Webpack打包主进程的过程被复制到`dist/package.json`，这就使得`dist`目录单独成为一个node项目，这样做原始的项目程序将完全摆脱打包过程。

有了`dist`目录，我们就可以cd进去，该干嘛干嘛，webpack将所有的程序文件（包括主进程和渲染进程）都打包好了，主进程的所有文件都打包到了`start.bundle.js`中，渲染进程被打包到了`index.bundle.js`和`vendors.js`中，并提供了入口`index.html`，并且我们有了`assets`目录，整个程序是压缩过的完整的程序，我们可以把`dist`目录当做一个压缩过的项目来对待，执行：

```bash
$ npm install
$ npm run dist:darwin  # Mac下
```

可以直接进行打包APP过程，最后能在`dist`下发现这样的目录：

```bash
dist
├── Web Painter-darwin-x64
    ├── Web Painter.app           # 这个就是最后编译出来的APP
    └── […other files, like LICENSE…]
└── […other bundled files, like index.html]
```

