let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/head4.html');

import Element from './../element'

export default class Head4Element extends Element{
  constructor(props) {
    super(props);
    this.tag = 'head4';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
Head4Element.elementTag = 'head4';