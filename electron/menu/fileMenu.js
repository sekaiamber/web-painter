const {dialog} = require('electron')
const ipc = require('electron').ipcMain
const BrowserWindow = require('electron').BrowserWindow

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
function saveProject(item, focusedWindow, callback) {
  if (exGlobal.projectPath) {
    _saveProject(exGlobal.projectPath, callback);
  } else {
    dialog.showSaveDialog({
      title: 'Save to ...',
    }, (filename) => {
      filename && _saveProject(filename, callback);
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

function _saveProject(filename, callback) {
  console.log(callback);
  exGlobal.getBrowserWindow('main').webContents.send('save-project', filename, callback);
  exGlobal.projectPath = filename;
}

// open project

function openProject(item, focusedWindow) {
  exGlobal.getBrowserWindow('main').webContents.send('open-project-check');
}

function _openProject(filename) {
  exGlobal.projectPath = filename;
  exGlobal.getBrowserWindow('main').webContents.send('open-project', filename);
}

function newProject(item, focusedWindow) {
  exGlobal.getBrowserWindow('main').webContents.send('new-project');
}

module.exports = {
  label: '文件',
  submenu: [{
    label: 'New...',
    accelerator: 'CmdOrCtrl+N',
    click: newProject 
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
});

ipc.on('save-project', function(event, callback) {
  saveProject(null, exGlobal.getBrowserWindow('main'), callback);
});

ipc.on('open-project', function(event) {
  dialog.showOpenDialog({
    title: 'Open Project',
    properties: ['openFile'],
    filters: [
      {name: 'WP Project File Type', extensions: ['wp']}
    ]
  }, (filename) => {
    filename && _openProject(filename[0]);
  });
});