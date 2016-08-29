const ipc = require('electron').ipcRenderer
import fshelper from './../fs'
import $ from 'jquery';

// call when save project

ipc.on('open-project', function (event, filename) {
  fshelper.readFiles([{
    path: filename
  }], (index, err, data, next) => {
    if (err) throw err;
    pageEditor.project.importFromMetaInfo(JSON.parse(data));
  });
  console.log(`[open project]: open project from ${filename}`)
})