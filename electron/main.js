const electron = require('electron')
// Module to control application life.
const app = electron.app

let exGlobal = require('./global');

const args = {
  'DEV': 'http://localhost:8888/',
  'DEPLOY': `file://${__dirname}/../dist/index.html`
}

function createWindow () {
  // Create the browser window.
  let mainWindow = exGlobal.getBrowserWindow('main');

  // get URL
  if (!process.argv[2]) {
    throw new Error('invalid entry url');
  }

  // and load the index.html of the app.
  mainWindow.loadURL(args[process.argv[2]]);

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  
  // clean cache
  mainWindow.webContents.session.clearCache(function(){
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
    exGlobal.destroyWindow('main');
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (!exGlobal.hasWindow('main')) {
    createWindow();
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
require('./menu/menu');
require('./contextmenu/menu');