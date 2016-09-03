const nativeImage = require('electron').nativeImage
import $ from 'jquery'

export class ProjectAsset {
  constructor (name, data) {
    this.name = name;
    this.data = data;
  }
}

export default class ProjectAssetList {
  constructor (project) {
    // super();
    this.project = project;
    this.data = {};
  }

  addLocalFile (filename) {

  }

  addAsset (name, data, datatype) {
    datatype = datatype || 'buffer'
    let processdata;
    switch (datatype) {
      case 'buffer':
        processdata = nativeImage.createFromBuffer(data)
        break;
      case 'path':
        processdata = nativeImage.createFromPath(data)
        break;
      case 'url':
        processdata = nativeImage.createFromDataURL(data)
        break;
    }
    this.push(new ProjectAsset(
      name,
      processdata.toDataURL()
    ));
    exEventEmitter.emit('projectAssetsDidUpdate');
  }

  removeAllAssets () {
    this.data = {}
  }

  push(asset) {
    this.data[asset.name] = asset;
  }

  getAssetsBuffer() {
    return Object.keys(this.data).map((k) => {
      return {
        name: k,
        data: nativeImage.createFromDataURL(this.data[k].data).toPNG()
      }
    })
  }

  readAsImage (name, $dom) {
    if (!this.data[name]) return;
    $dom = $dom || $('<img src=""/>');
    let image = this.data[name].data;
    $dom.attr('src', image);
    return $dom;
  }
}
ProjectAssetList.ProjectAsset = ProjectAsset;