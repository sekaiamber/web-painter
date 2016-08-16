import $ from 'jquery'

export default class PagePattern {
  constructor(patternReactComponent, pagePiece, index) {
    this.$pattern = this.initDom(patternReactComponent);
    this.pagePiece = pagePiece;
    this.index = index;
    this.selected = false;
  }

  initDom(patternReactComponent) {
    let $pattern = $(patternReactComponent.getPlainHtmlText()).addClass('pe-pattern');
    // 编辑
    $pattern.click(() => {
      this.pagePiece.selectPattern(this.index, this);
    })
    return $pattern;
  }

  getInfo() {
    return {
      height: this.$pattern.outerHeight(),
      selected: this.selected
    }
  }
}