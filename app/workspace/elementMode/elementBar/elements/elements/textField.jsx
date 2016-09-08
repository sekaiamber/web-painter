let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/text-field.html');

import Element from './../element'

export default class TextFieldElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'text-field';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
TextFieldElement.elementTag = 'text-field';