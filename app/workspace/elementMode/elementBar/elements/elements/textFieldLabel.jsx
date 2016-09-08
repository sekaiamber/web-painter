let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/text-field-label.html');

import Element from './../element'

export default class TextFieldLabelElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'text-field-label';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
TextFieldLabelElement.elementTag = 'text-field-label';