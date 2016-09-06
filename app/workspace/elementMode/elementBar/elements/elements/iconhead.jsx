let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/icon-heading.html');

import Element from './../element'

export default class IconHeadElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'icon-heading';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
IconHeadElement.elementTag = 'icon-heading';