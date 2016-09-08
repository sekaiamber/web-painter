let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/checkbox.html');

import Element from './../element'

export default class CheckboxElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'checkbox';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
CheckboxElement.elementTag = 'checkbox';