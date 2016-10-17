const {dialog} = require('electron')
const ipc = require('electron').ipcMain

let exGlobal = require('./../global')
// export project
function exportProject(item, focusedWindow) {
  dialog.showSaveDialog({
    title: 'Export Project',
  }, (filename) => {
    if (filename) {
      exGlobal.getBrowserWindow('main').webContents.send('export-project', filename);
    }
  });
}

// save project
function saveProject(item, focusedWindow) {
  if (exGlobal.projectPath) {
    exGlobal.getBrowserWindow('main').webContents.send('save-project', exGlobal.projectPath);
  } else {
    dialog.showSaveDialog({
      title: 'Save to ...',
    }, (filename) => {
      filename && _saveProject(filename);
    });
  }
}

function saveAsProject(item, focusedWindow) {
  dialog.showSaveDialog({
    title: 'Save As to ...',
  }, (filename) => {
    filename && _saveProject(filename);
  });
}

function _saveProject(filename) {
  exGlobal.getBrowserWindow('main').webContents.send('save-project', filename);
  exGlobal.projectPath = filename;
}

// open project

function openProject(item, focusedWindow) {
  dialog.showOpenDialog({
    title: 'Open Project',
    properties: ['openFile'],
    filters: [
      {name: 'WP Project File Type', extensions: ['wp']}
    ]
  }, (filename) => {
    filename && _openProject(filename[0]);
  });
}

function _openProject(filename) {
  exGlobal.projectPath = filename;
  exGlobal.getBrowserWindow('main').webContents.send('open-project', filename);
}

module.exports = {
  label: '文件',
  submenu: [{
    label: 'New...',
    accelerator: 'CmdOrCtrl+N'
  }, {
    label: 'Open...',
    accelerator: 'CmdOrCtrl+O',
    click: openProject
  }, {
    type: 'separator'
  }, {
    label: 'Save...',
    accelerator: 'CmdOrCtrl+S',
    click: saveProject
  }, {
    label: 'Save As...',
    accelerator: 'Shift+CmdOrCtrl+S',
    click: saveAsProject
  }, {
    type: 'separator'
  }, {
    label: 'Export',
    submenu: [{
      label: 'Export Project',
      accelerator: 'CmdOrCtrl+E',
      click: exportProject
    }]
  }]
}

// utils

ipc.on('open-file-dialog-sync', function (event, title, filters) {
  title = title || 'Open file';
  filters = filters || [{name: 'All Files', extensions: ['*']}]
  dialog.showOpenDialog({
    title: title,
    properties: ['openFile'],
    filters: filters
  }, function (files) {
    if (files) {
      event.returnValue = files;
    } else {
      event.returnValue = null;
    }
  })
})