import $ from 'jquery'

require('./pagePiece.scss');

export default class PagePiece {
  constructor(pieceReactComponent) {
    this.component = pieceReactComponent;
    // this.patterns = [];
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
      this.updateHeight();
      console.log(`[page editor]: add ${this.component.tag} piece`);
    }
  }

  addPattern(patternReactComponent, index) {
    let patterns = $('.pe-pattern', this.$piece);
    if (patterns.length == 0) {
      // empty的情况
      if (index > 0) return;
      let $pattern = $(patternReactComponent.getPlainHtmlText()).addClass('pe-pattern');
      this.$piece.append($pattern);
    } else {
      // 插入的情况
      if (patterns.length - 1 < index) return;
    }
    this.updateHeight();
    this.component.handleChangePatternBarState(index);
    console.log(`[page editor][${this.component.tag} piece]: add ${patternReactComponent.tag} pattern at position ${index}`);
  }

  updateHeight() {
    let patterns = [];
    $('>.pe-pattern', this.$piece).each((i, e) => {
      let $e = $(e);
      patterns.push({
        height: $e.outerHeight()
      });
    });
    this.component.updateHeight(this.$piece.outerHeight(), patterns);
  }
}