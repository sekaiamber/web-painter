const ipc = require('electron').ipcRenderer
import fshelper from './../fs'
import $ from 'jquery';

const pageTemplate = require('./../../htmlTemplates/export/page.html');
const bundleCss = require('./../../htmlTemplates/export/bundle.css.wpexport')

// const antcss = require()


function getFiles(filePath, sign) {
  let files = [{
    filename: 'index.html',
    data: pageTemplate.replace('@content', $('#page').html())
  }, {
    filename: 'bundle.css',
    data: bundleCss
  }];
  for (var i = 0; i < files.length; i++) {
    files[i].path = filePath + sign + files[i].filename;
  }
  return files;
}




// call when save project

ipc.on('save-project', function (event, filename) {
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
  // make project folder
  fshelper.mkdirIfNotExist(filename, (err) => {
    if (err) throw err;
    // save file
    let files = getFiles(filename, sign);
    fshelper.writeFiles(files, (index, err, next) => {
      if (err) throw err;
      console.log(`[save project]: save file ${index + 1} of ${files.length}`);
      next();
    })
  });
})