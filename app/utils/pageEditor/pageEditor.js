import $ from 'jquery'
import PagePiece from './pagePiece'

export default class PageEditor {
  constructor() {
    this.$page = null;
    this.pieces = []
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

  addPiece(pieceReactComponent) {
    let piece = new PagePiece(pieceReactComponent);
    piece.updatePageDom(this.$page);
    this.pieces.push(piece);
  }

  getPiece(tag) {
    let res = this.pieces.find((p) => {
      return p.component.tag == tag
    });
    return res;
  }
}