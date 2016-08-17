import $ from 'jquery'
import attributeHelper from './pageAttribute'

export default class PagePattern {
  constructor(patternReactComponent, pagePiece, index) {
    this.$pattern = this.initDom(patternReactComponent);
    this.attributeGroups = patternReactComponent.attributeGroups;
    this.tag = 'pattern';
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

  getInfo () {
    return {
      height: this.$pattern.outerHeight(),
      selected: this.selected
    }
  }

  // attrbute
  getAttribute(key) {
    return attributeHelper[key].get(this.$pattern);
  }
  getAttributeObject () {
    let ret = {}
    // basic
    let keys = [
      // basic
      'id', 'class',
      // appearance
      'padding', 'margin', 'width', 'height',
    ]
    keys.map((key) => {
      ret[key] = attributeHelper[key].get(this.$pattern);
    });
    return ret;
  }

  setAttribute(key, value) {
    attributeHelper[key].set(this.$pattern, value);
  }
  setAttributeObject(obj) {
    Object.keys(obj).map((key) => {
      attributeHelper[key].set(this.$pattern, obj[key]);
    })
  }
}