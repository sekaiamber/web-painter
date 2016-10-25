const ipc = require('electron').ipcRenderer
var AdmZip = require('adm-zip');
import fshelper from './../fs'
import $ from 'jquery'
import ProjectAssetList from './../project/asset'
const ProjectAsset = ProjectAssetList.ProjectAsset;

// zip
function readZipFile(filename) {
  var zip = new AdmZip(filename);
  // open assets
  pageEditor.project.assets.removeAllAssets();
  var assets = zip.getEntries(); // an array of ZipEntry records 
 
  assets.forEach(function(asset) {
    if (asset.entryName.startsWith('assets/')) {
      pageEditor.project.assets.addAsset(asset.name, new Buffer(asset.getData()))
    }
  });

  var info = zip.getEntry('info.json'); // an array of ZipEntry records 
  pageEditor.project.importFromMetaInfo(JSON.parse(new Buffer(info.getData()).toString()));
}

// call when open project

ipc.on('open-project', function (event, filename) {
  readZipFile(filename);
  ipc.send('update-project-path', filename);
  console.log(`[open project]: open project from ${filename}`);
})

ipc.on('open-project-check', function() {
  exEventEmitter.emit('checkSaveProject', 'open-project');
})