let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/selector.html');

import Element from './../element'

export default class SelectorElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'selector';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
SelectorElement.elementTag = 'selector';