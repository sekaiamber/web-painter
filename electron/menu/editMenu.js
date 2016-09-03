const {dialog} = require('electron')
const ipc = require('electron').ipcMain

let exGlobal = require('./../global')

// Undo
function undo(item, focusedWindow) {
  exGlobal.getBrowserWindow('main').webContents.send('undo-event');
}

// Redo
function redo(item, focusedWindow) {
  exGlobal.getBrowserWindow('main').webContents.send('redo-event');
}



module.exports = {
  label: 'Edit',
  submenu: [{
    label: 'Undo',
    accelerator: 'CmdOrCtrl+Z',
    click: undo
  }, {
    label: 'Redo',
    accelerator: 'Shift+CmdOrCtrl+Z',
    click: redo
  }, {
    label: 'Cut',
    accelerator: 'CmdOrCtrl+X',
    role: 'cut'
  }, {
    label: 'Copy',
    accelerator: 'CmdOrCtrl+C',
    role: 'copy'
  }, {
    label: 'Paste',
    accelerator: 'CmdOrCtrl+V',
    role: 'paste'
  },]
}