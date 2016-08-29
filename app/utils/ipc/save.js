const ipc = require('electron').ipcRenderer
import fshelper from './../fs'
import $ from 'jquery';

// call when save project

ipc.on('save-project', function (event, filename) {
  if (!filename.endsWith('.wp')) {
    filename += '.wp';
  }
  let sign;
  if (filename.indexOf('\\') > -1) {
    // windows
    sign = '\\';
  } else {
    // mac or linux
    sign = '/'
  }
  let folderName = filename.split(/[\/\\]/);
  folderName = folderName[folderName.length - 1];
  fshelper.writeFiles([{
    path: filename,
    data: JSON.stringify(pageEditor.project.getMetaInfo())
  }])
  console.log(`[save project]: save project to ${filename}`)
})