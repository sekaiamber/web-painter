/*
* 结构：
*
* name: '随便取一个',
* entry: '入口脚本',
* plugins: {
*   template: '注入的html模板',
*   filename: '生成的html的文件名'
* },
* rewrite: '开发环境下URL映射（正式环境下写在网关内）'
*
* 注意：所有目录在'/root/src'开始
*/

var routes = [{
  name: 'index',
  entry: './index/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'index.html'
  },
  rewrite: /\/index/
}]

module.exports = routes;
