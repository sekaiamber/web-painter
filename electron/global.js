const electron = require('electron')
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var windowsList = {}

var Globals = {
  getBrowserWindow: function (name, opt) {
    if (windowsList[name]) return windowsList[name];
    opt = opt || {
      width: 800,
      height: 600,
      // Enables Chromium's experimental features
      webPreferences: {
        experimentalFeatures: true
      }
    };
    let window = new BrowserWindow(opt);
    windowsList[name] = window;
    return window;
  },
  hasWindow: function (name) {
    return !!windowsList[name];
  },
  destroyWindow: function (name) {
    if (windowsList[name]) {
      delete windowsList[name]
    }
  }
}


module.exports = Globals;