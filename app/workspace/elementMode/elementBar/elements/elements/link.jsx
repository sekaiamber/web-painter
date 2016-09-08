let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/link.html');

import Element from './../element'

export default class LinkElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'link';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
LinkElement.elementTag = 'link';