import Page from './page'
import $ from 'jquery';

import {getPatternFrom$dom} from './utils'
import ProjectAssetList from './asset'
import ColorList from './colors'
import { defaultColor } from './colors'

export default class Project {
  constructor(pageEditor) {
    this.pageEditor = pageEditor;
    // 用来保存filepath
    this.filepath = null;
    // 页面
    this.pages = [];
    this.currentPage = null;

    // pieces
    this.headerPiece = null;
    this.bodyPiece = null;
    this.footerPiece = null;

    // asset
    this.assets = new ProjectAssetList(this);
    this.colors = new ColorList(defaultColor);

    this.initEvent();
  }

  init() {
    // set public pieces
    this.headerPiece = this.pageEditor.getPiece('header');
    this.bodyPiece = this.pageEditor.getPiece('body');
    this.footerPiece = this.pageEditor.getPiece('footer');

    let page = this.addNewPage({
      name: 'HOME',
      title: 'Home Page',
      fileName: 'index'
    });

  }

  initEvent() {
    exEventEmitter.on('selectProjectPage', (name) => {
      this.selectPage(name);
    });
    exEventEmitter.on('createProjectPage', (name) => {
      let pageinfo = {
        name: name,
        fileName: name.toLowerCase()
      }
      this.addNewPage(pageinfo);
    })
  }

  addNewPage(obj) {
    let page = new Page(obj.name, this);
    Object.keys(obj).map((key) => {
      page[key] = obj[key];
    });
    this.pages.push(page);
    exEventEmitter.emit('selectProjectPage', page.name);
    return page;
  }

  updatePageInfo(name, obj) {
    delete obj.name;
    let page = this.pages.find((p) => p.name == name);
    Object.keys(obj).map((key) => {
      page[key] = obj[key];
    });
  }

  selectPage(name) {
    let page = this.pages.find((p) => p.name == name);
    this.currentPage = page;
    this.bodyPiece.replacePatterns(this.currentPage.patterns);
    exEventEmitter.emit('projectPageInfoChange', this);
    exEventEmitter.emit('cancelSelectd');
  }

  setCurrentPagePatterns(patterns) {
    this.currentPage.patterns = patterns;
  }

  // save project
  getMetaInfo() {
    let ret = {};
    ret.headerPiece = this.headerPiece.$piece[0].innerHTML;
    ret.footerPiece = this.footerPiece.$piece[0].innerHTML;

    ret.pages = this.pages.map((p) => {
      return p.getMetaInfo();
    });
    
    return ret;
  }

  importFromMetaInfo(info) {
    // header piece
    let headerPiecePatterns = $.makeArray($(info.headerPiece).map((index, p) => {
      return getPatternFrom$dom($(p), this.headerPiece, index);
    }));
    this.headerPiece.replacePatterns(headerPiecePatterns);
    // footer piece
    let footerPiecePatterns = $.makeArray($(info.footerPiece).map((index, p) => {
      return getPatternFrom$dom($(p), this.footerPiece, index);
    }));
    this.footerPiece.replacePatterns(footerPiecePatterns);
    // pages
    let pages = info.pages.map((p) => {
      let page = new Page(p.name, this);
      page.importFromMetaInfo(p);
      return page;
    });
    this.pages = pages;
    this.selectPage(pages[0].name);
  }
}