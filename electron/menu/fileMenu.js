const {dialog} = require('electron')
const ipc = require('electron').ipcMain

let exGlobal = require('./../global')
// save
let projectPath = null;
function save(item, focusedWindow) {
  if (projectPath) {
    exGlobal.getBrowserWindow('main').webContents.send('save-project', projectPath);
  } else {
    dialog.showSaveDialog({
      title: 'Save to ...',
    }, (filename) => {
      if (filename) {
        exGlobal.getBrowserWindow('main').webContents.send('save-project', filename);
        projectPath = filename;
      }
    });
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
    click: save
  }]
}