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
        this.pagePiece.selectPattern(this.index, this);
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