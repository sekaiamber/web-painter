module.exports = {
  appPath: require('electron').remote.app.getAppPath(),
  assetsPrefix: 'file://' + require('electron').remote.app.getAppPath() + '/'
}