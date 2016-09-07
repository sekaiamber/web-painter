let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/icon-heading-paragraph.html');

import Element from './../element'

export default class IconHeadParagraphElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'icon-heading-paragraph';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
IconHeadParagraphElement.elementTag = 'icon-heading-paragraph';