require('./ipc/export')
require('./ipc/history')
require('./ipc/save')
require('./ipc/open')
require('./ipc/contextmenu')


const ipc = require('electron').ipcRenderer

exEventEmitter.on('ipc', function() {
  ipc.send.apply(ipc, arguments)
});