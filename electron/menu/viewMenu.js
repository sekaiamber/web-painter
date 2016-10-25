const {dialog} = require('electron')
const ipc = require('electron').ipcMain
const BrowserWindow = require('electron').BrowserWindow

let exGlobal = require('./../global')


ipc.on('reload-window', function() {
  reloadWindow(exGlobal.getBrowserWindow('main'));
})

ipc.on('reload-window-all', function() {
  reloadWindow(exGlobal.getBrowserWindow('main'), true);
})

function reloadWindow(focusedWindow, reloadAll) {
  if (reloadAll) {
    exGlobal.projectPath = null;
  }
  if (focusedWindow) {
    // on reload, start fresh and close any old
    // open secondary windows
    if (focusedWindow.id === 1) {
      BrowserWindow.getAllWindows().forEach(function (win) {
        if (win.id > 1) {
          win.close()
        }
      })
    }
    focusedWindow.reload()
  }
}

module.exports = {
  label: '查看',
  submenu: [{
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: function(item, focusedWindow) {
      reloadWindow(focusedWindow);
    }
  }, {
    label: 'Toggle Full Screen',
    accelerator: (function () {
      if (process.platform === 'darwin') {
        return 'Ctrl+Command+F'
      } else {
        return 'F11'
      }
    })(),
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
      }
    }
  }, {
    label: 'Toggle Developer Tools',
    accelerator: (function () {
      if (process.platform === 'darwin') {
        return 'Alt+Command+I'
      } else {
        return 'Ctrl+Shift+I'
      }
    })(),
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.toggleDevTools()
      }
    }
  }
  // , {
  //   type: 'separator'
  // }, {
  //   label: 'App Menu Demo',
  //   click: function (item, focusedWindow) {
  //     if (focusedWindow) {
  //       const options = {
  //         type: 'info',
  //         title: 'Application Menu Demo',
  //         buttons: ['Ok'],
  //         message: 'This demo is for the Menu section, showing how to create a clickable menu item in the application menu.'
  //       }
  //       electron.dialog.showMessageBox(focusedWindow, options, function () {})
  //     }
  //   }
  // }
  ]
}