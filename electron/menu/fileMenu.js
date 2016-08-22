const {dialog} = require('electron')
const ipc = require('electron').ipcMain

let exGlobal = require('./../global')
// save
function save(filename) {
  if (filename) {
    exGlobal.getBrowserWindow('main').webContents.send('save-project', filename);
  }
}



module.exports = {
  label: 'File',
  submenu: [{
    label: 'New...',
    accelerator: 'CmdOrCtrl+N'
  }, {
    label: 'Save...',
    accelerator: 'CmdOrCtrl+S',
    click: function (item, focusedWindow) {
      dialog.showSaveDialog({
        title: 'Save to ...',
      }, save);
    }
  }]
}