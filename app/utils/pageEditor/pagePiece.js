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
      let $piece = $(`<div class="pe-piece ${this.component.tag}"></div>`);
      this.$piece = $piece;
      this.$page.append($piece);
      this.component.updateHeight($piece.outerHeight());
      console.log(`[page editor]: add ${this.component.tag} piece`);
    }
  }

  addPattern(patternReactComponent, index) {
    let patterns = $('.pe-pattern', this.$piece);
    if (patterns.length == 0) {
      // empty的情况
      if (index > 0) return;
      htmlTemplateReader.read('');
    } else {
      if (patterns.length - 1 < index) return;
      // 插入的情况
    }
    console.log(`[page editor][${this.component.tag} piece]: add ${patternReactComponent.tag} pattern at position ${index}`);
  }
}