let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/div.html');
require('./../../../../../htmlTemplates/elements/div.scss');

import Element from './../element'

export default class DivElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'col1row';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
DivElement.elementTag = 'col1row';