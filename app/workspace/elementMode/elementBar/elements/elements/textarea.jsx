let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/textarea.html');

import Element from './../element'

export default class TextareaElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'textarea';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
TextareaElement.elementTag = 'textarea';