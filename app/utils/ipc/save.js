const ipc = require('electron').ipcRenderer
const nativeImage = require('electron').nativeImage
var AdmZip = require('adm-zip');
import fshelper from './../fs'
import $ from 'jquery';

// zip
function createZipfile(files) {
  var zip = new AdmZip();
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    zip.addFile(file.name, file.data)
  };
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

  let zip = createZipfile(files);
  // let zip = createZipfile({
  //   name: 'assets/aaa.jpg',
  //   data: nativeImage.createFromPath('/Volumes/disk02/web-painter/assets/images/sekai.jpg').toPNG()
  // })

  zip.writeZip(filename);
  console.log(`[save project]: save project to ${filename}`)
})