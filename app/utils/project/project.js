import Page from './page'

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
    let page = new Page(obj.name);
    Object.keys(obj).map((key) => {
      page[key] = obj[key];
    });
    this.pages.push(page);
    exEventEmitter.emit('selectProjectPage', page.name);
    return page;
  }

  selectPage(name) {
    let page = this.pages.find((p) => p.name == name);
    this.currentPage = page;
    this.bodyPiece.replacePatterns(this.currentPage.patterns);
    exEventEmitter.emit('projectPageInfoChange', this);
  }

  setCurrentPagePatterns(patterns) {
    this.currentPage.patterns = patterns;
  }


}