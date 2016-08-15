import $ from 'jquery'

require('./pagePiece.scss');

export default class PagePiece {
  constructor(pieceReactComponent) {
    this.component = pieceReactComponent;
    this.patterns = [];
  }

  updatePageDom(page) {
    if (!page) return;
    this.$page = $(page);
    if ($(`.pe-piece.${this.component.tag}`, this.$page).length > 0) {
      return;
    } else {
      let piece = $(`<div class="pe-piece ${this.component.tag}"></div>`);
      this.$page.append(piece);
      this.component.updateHeight(piece.outerHeight());
      console.log(`[page editor]: add ${this.component.tag} piece`);
    }
  }

  addPattern(patternReactComponent, index) {
    console.log(`[page editor][${this.component.tag} piece]: add ${patternReactComponent.tag} pattern at position ${index}`);
  }
}