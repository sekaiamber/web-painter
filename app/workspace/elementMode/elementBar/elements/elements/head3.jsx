let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/head3.html');

import Element from './../element'

export default class Head3Element extends Element{
  constructor(props) {
    super(props);
    this.tag = 'head3';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
Head3Element.elementTag = 'head3';