import $ from 'jquery'

export default class PagePattern {
  constructor(patternReactComponent, pagePiece, index) {
    this.$pattern = this.initDom(patternReactComponent);
    this.attributeGroups = patternReactComponent.attributeGroups;
    this.tag = 'pattern';
    this.pagePiece = pagePiece;
    this.index = index;
    this.selected = false;
  }

  // init
  initDom(patternReactComponent) {
    let $pattern = $(patternReactComponent.getPlainHtmlText()).addClass('pe-pattern');
    $pattern = this.initClick($pattern);
    $pattern = this.initHover($pattern);
    $pattern = this.initMousemove($pattern);
    return $pattern;
  }

  initClick($pattern) {
    // select mode: select something
    $pattern.click((e) => {
      if (window._mode_ == 'select') {
        if (e.target == this.$pattern[0]) {
          // select pattern
          this.pagePiece.selectPattern(this.index, this);
        } else {
          // select element
          this.pagePiece.selectElement(e);
        }
      }
    });
    return $pattern;
  }

  initHover($pattern) {
    
    return $pattern;
  }

  initMousemove($pattern) {
    
    return $pattern;
  }

  // piece control

  getInfo () {
    return {
      height: this.$pattern.outerHeight(),
      selected: this.selected
    }
  }

}