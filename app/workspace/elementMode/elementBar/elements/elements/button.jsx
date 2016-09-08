let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/button.html');

import Element from './../element'

export default class ButtonElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'button';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
ButtonElement.elementTag = 'button';