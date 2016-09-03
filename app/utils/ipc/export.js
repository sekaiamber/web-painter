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
    let project;
    exEventEmitter.emit('processShow', 0, () => {
      project = new ExportProject(filename);
      exEventEmitter.emit('processShow', 10, () => {
        project.build();
        let files = project.getFiles();
        exEventEmitter.emit('processShow', 60, () => {
          fshelper.writeFiles(files, (index, err, next) => {
            if (err) throw err;
            console.log(`[export project]: save file ${index + 1} of ${files.length}`);
            next();
            if (index == files.length - 1) {
              exEventEmitter.emit('processShow', 100, () => {
                exEventEmitter.emit('processHide');
              });
            }
          })
        });
      });
    });
  });
})