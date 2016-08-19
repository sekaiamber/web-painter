import $ from 'jquery'
import PagePiece from './pagePiece'

export default class PageEditor {
  constructor() {
    this.$page = null;
    this.pieces = [];
    this.initEvent();
  }

  // init

  initEvent() {
    exEventEmitter.on('elementComponentSelected', this.selectElementComponent.bind(this))
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

  // elementComponent control
  selectElementComponent(elementComponent) {
    this.currentSelectComponent = elementComponent;
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