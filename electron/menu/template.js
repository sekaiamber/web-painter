const electron = require('electron')
const BrowserWindow = electron.BrowserWindow

let fileMenu = require('./fileMenu')

let editMenu = require('./editMenu')

let viewMenu = require('./viewMenu')

let windowMenu = {
  label: '窗口',
  role: 'window',
  submenu: [{
    label: 'Minimize',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }, {
    label: 'Close',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  }, {
    type: 'separator'
  }, {
    label: 'Reopen Window',
    accelerator: 'CmdOrCtrl+Shift+T',
    enabled: false,
    key: 'reopenMenuItem',
    click: function () {
      app.emit('activate')
    }
  }]
}

let helpMenu = {
  label: '帮助',
  role: 'help',
  submenu: [{
    label: '项目首页',
    click: function () {
      electron.shell.openExternal('https://sekaiamber.github.io/web-painter/')
    }
  }, {
    type: 'separator'
  }, {
    label: '在Github中查看项目',
    click: function () {
      electron.shell.openExternal('https://github.com/sekaiamber/web-painter')
    }
  }, {
    label: '报告Bug',
    click: function () {
      electron.shell.openExternal('https://github.com/sekaiamber/web-painter/issues/new')
    }
  }, {
    label: '想要新功能？点击上方<报告Bug>，将原始内容去掉提交Issue吧！',
    enabled: false
  }, {
    type: 'separator'
  }, {
    label: '关于Electron',
    click: function () {
      electron.shell.openExternal('http://electron.atom.io')
    }
  }]
}

module.exports = [fileMenu, editMenu, viewMenu, windowMenu, helpMenu]