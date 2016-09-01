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

  addAsset (name, data) {
    this.push(new ProjectAsset(name, data));
  }

  push(asset) {
    this.data[asset.name] = asset;
  }

  getAssets() {
    return Object.keys(this.data).map((k) => {
      return this.data[k]
    })
  }

  readAsImage (name, $dom) {
    if (!this.data[name]) return;
    $dom = $dom || $('<img src=""/>');
    let bf = this.data[name].data;
    let image = nativeImage.createFromBuffer(bf).toDataURL();
    $dom.attr('src', image);
    return $dom;
  }
}
ProjectAssetList.ProjectAsset = ProjectAsset;