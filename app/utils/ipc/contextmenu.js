const ipc = require('electron').ipcRenderer
import $ from 'jquery';

exEventEmitter.on('contextMenuPattern', () => {
  ipc.send('show-context-menu')
})
exEventEmitter.on('contextMenuElement', () => {
  ipc.send('show-context-menu')
})

