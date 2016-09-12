const ipc = require('electron').ipcRenderer
const nativeImage = require('electron').nativeImage
const archiver = require('archiver');
const fs = require('fs');
import fshelper from './../fs'
import $ from 'jquery';

// zip
function createZipfile(files) {
  var zip = archiver.create('zip', {});
  for (var i = 0; i < files.length; i++) {
    var file = files[i]
    zip.append(file.data, {'name': file.name});
  }
  return zip;
}


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

  let files = [{
    name: 'info.json',
    data: Buffer.from(JSON.stringify(pageEditor.project.getMetaInfo()))
  }];
  let assets = pageEditor.project.assets.getAssetsBuffer()
  assets = assets.map((asset) => {
    return {
      name: 'assets/' + asset.name,
      data: asset.data
    }
  })
  files = files.concat(assets);

  var output = fs.createWriteStream(filename);
  output.on('close', function() {
    console.log(`[save project]: save project to ${filename}`)
  });

  let zipArchiver = createZipfile(files);
  zipArchiver.pipe(output);

  zipArchiver.finalize();
})