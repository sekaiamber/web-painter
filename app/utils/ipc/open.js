const ipc = require('electron').ipcRenderer
var AdmZip = require('adm-zip');
import fshelper from './../fs'
import $ from 'jquery'
import ProjectAssetList from './../project/asset'
const ProjectAsset = ProjectAssetList.ProjectAsset;

// zip
function readZipFile(filename) {
  var zip = new AdmZip(filename);
  var assets = zip.getEntries(); // an array of ZipEntry records 
 
  assets.forEach(function(asset) {
    if (asset.entryName.startsWith('assets/')) {
      pageEditor.project.assets.addAsset(asset.name, new Buffer(asset.getData()))
    }
  });

  var info = zip.getEntry('info.json'); // an array of ZipEntry records 
  pageEditor.project.importFromMetaInfo(JSON.parse(new Buffer(info.getData()).toString()));
  // zipEntries.forEach(function(zipEntry) {
  //     console.log(zipEntry.toString());
  // });
}

// call when save project

ipc.on('open-project', function (event, filename) {
  // fshelper.readFiles([{
  //   path: filename
  // }], (index, err, data, next) => {
  //   if (err) throw err;
  //   pageEditor.project.importFromMetaInfo(JSON.parse(data));
  // });
  readZipFile(filename);
  console.log(`[open project]: open project from ${filename}`)
})