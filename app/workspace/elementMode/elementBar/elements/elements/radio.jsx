let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/radio.html');

import Element from './../element'

export default class RadioElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'radio';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
RadioElement.elementTag = 'radio';