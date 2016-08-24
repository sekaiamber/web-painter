import $ from 'jquery'

export default class PagePattern {
  constructor(patternReactComponent, pagePiece, index) {
    this.attributeGroups = patternReactComponent.attributeGroups;
    this.tag = 'pattern';
    this.pagePiece = pagePiece;
    this.index = index;
    this.selected = false;
    this.$pattern = this.initDom(patternReactComponent);
  }

  // init
  initDom(patternReactComponent) {
    let $pattern = $(patternReactComponent.getPlainHtmlText()).addClass('pe-pattern');
    $pattern.attr('wp-pattern-index', this.index);
    return $pattern;
  }

  updateIndex(index) {
    this.index = index;
    this.$pattern.attr('wp-pattern-index', this.index);
  }

  // piece control

  getInfo () {
    return {
      height: this.$pattern.outerHeight(),
      selected: this.selected
    }
  }

}