import $ from 'jquery';
import elementExportHandler from './elementExportHandler'
import htmlExportHandler from './htmlExportHandler'
const nativeImage = require('electron').nativeImage
const crypto = require('crypto');

const pageTemplate = require('./../../../htmlTemplates/export/page.html');
const bundleCss = require('./../../../htmlTemplates/export/bundle.css.wpexport');

import presetAssets from './../../../workspace/utils/presetAssets'

const cleanAttrs = [
  // global
  'wp-no-select', 'wp-raw', 'wp-element', 'wp-pattern', 'wp-pattern-index',
  // linklist
  'wp-a-self-page', 'wp-a-href',
  // img
  'wp-img-type', 'wp-img-target'
]

let copyList = require('./exportCopyList.json');

export default class ExportProject {
  constructor(projectPath) {
    this.projectPath = projectPath;
    this.sign;
    if (projectPath.indexOf('\\') > -1) {
      // windows
      this.sign = '\\';
    } else {
      // mac or linux
      this.sign = '/'
    }
    this.project = pageEditor.project;
    this.assetsCount = 0;
    this.assets = {
      preset: {},
      project: {}
    };
    this.files = [];

  }

  build() {
    this.buildFiles()
  }

  buildFiles() {
    this.project.pages.map(this.getPageHtml.bind(this));
    // bundles
    this.files.push({
      filename: 'bundle.css',
      data: bundleCss
    });
    this.files = this.files.concat(copyList.map((file) => {
      file['copy'] = true;
      return {
        copy: true,
        from: file.from,
        filename: file.to
      };
    }))
  }

  getPageHtml(page) {
    let data = pageTemplate
      .replace('@title', page.title)
      .replace('@keywords', page.keywords)
      .replace('@description', page.description)
      .replace('@content', this.cleanHtml(page.getHtmlText()));


    this.files.push({
      filename: page.fileName + '.html',
      data: data
    })
  }

  cleanHtml(html) {
    let $dom = $(html);
    let $c;
    let self = this;
    // deal with wp-element
    for (var i = 0; i < elementExportHandler.length; i++) {
      var handler = elementExportHandler[i];
      $c = $(handler.selector, $dom);
      $c.each(function (index) {
        handler.handler(this, self);
      })
    }

    // deal with html element
    for (var i = 0; i < htmlExportHandler.length; i++) {
      var handler = htmlExportHandler[i];
      $c = $(handler.selector, $dom);
      $c.each(function (index) {
        handler.handler(this, self);
      })
    }

    // remove attrs
    $c = $(cleanAttrs.map((k) => `[${k}]`).join(','), $dom);
    for (var i = 0; i < cleanAttrs.length; i++) {
      $c.removeAttr(cleanAttrs[i]);
    }

    // return
    $dom = $('<div></div>').append($dom);
    return $dom.html();
  }

  getProjectAsset(name) {
    return this.getAsset('project', name);
  }

  getPresetAsset(name) {
    return this.getAsset('preset', name);
  }

  getAsset(type, name) {
    let assets = this.assets[type];
    if (!assets[name]) {
      let asset = {
        output: 'assets/' + crypto.createHash('md5').update(`${this.assetsCount++}`).digest("hex") + '.png'
      }
      switch (type) {
        case 'preset':
          asset.data = nativeImage.createFromPath(presetAssets[name]).toPNG();
          break;
        case 'project':
          asset.data = nativeImage.createFromDataURL(this.project.assets.data[name].data).toPNG();
          break;
      }
      this.files.push({
        filename: asset.output,
        data: asset.data
      });
      assets[name] = asset;
    }
    return assets[name].output;
  }

  // files
  getFiles() {
    for (var i = 0; i < this.files.length; i++) {
      this.files[i].path = this.projectPath + this.sign + this.files[i].filename;
    }
    return this.files;
  }
}