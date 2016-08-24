import $ from 'jquery'
import PagePiece from './pagePiece'
import Project from './../project/project'

export default class PageEditor {
  constructor() {
    this.$page = null;
    this.pieces = [];
    this.init();
  }

  // init
  init() {
    this.initEvent();
    this.initProject();
  }

  initEvent() {
    exEventEmitter.on('elementComponentSelected', (elementComponent) => {
      this.currentSelectComponent = elementComponent;
    });
    exEventEmitter.on('uiready', () => {
      this.project.init();
    });
  }

  initProject() {
    this.project = new Project(this);
  }

  updatePageDom(page) {
    this.$page = $(page);
  }

  initPageDom() {
    for (var i = 0; i < this.pieces.length; i++) {
      var piece = this.pieces[i];
      piece.updatePageDom(this.$page);
    }
  }

  // piece control

  addPiece(pieceReactComponent) {
    let piece = new PagePiece(pieceReactComponent, this);
    this.$page.append(piece.$piece);
    this.pieces.push(piece);
    piece.updateRender();
  }

  getPiece(tag) {
    let res = this.pieces.find((p) => {
      return p.component.tag == tag
    });
    return res;
  }
}