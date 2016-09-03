const ipc = require('electron').ipcRenderer
import fshelper from './../fs'
import $ from 'jquery';

import ExportProject from './export/exportProject'


// call when export project

ipc.on('export-project', function (event, filename) {
  // make project folder
  fshelper.mkdirIfNotExist(filename, (err) => {
    if (err) throw err;
    // save file
    let project = new ExportProject(filename);
    let files = project.getFiles();
    fshelper.writeFiles(files, (index, err, next) => {
      if (err) throw err;
      console.log(`[export project]: save file ${index + 1} of ${files.length}`);
      next();
    })
  });
})