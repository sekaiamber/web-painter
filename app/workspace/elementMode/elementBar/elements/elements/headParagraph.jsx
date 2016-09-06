let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/heading-paragraph.html');

import Element from './../element'

export default class HeadParagraghElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'heading-paragraph';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
HeadParagraghElement.elementTag = 'heading-paragraph';