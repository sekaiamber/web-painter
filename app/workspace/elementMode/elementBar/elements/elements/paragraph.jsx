let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/paragraph.html');

import Element from './../element'

export default class ParagraghElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'paragraph';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
ParagraghElement.elementTag = 'paragraph';