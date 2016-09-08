let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/textarea-label.html');

import Element from './../element'

export default class TextareaLabelElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'textarea-label';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
TextareaLabelElement.elementTag = 'textarea-label';