let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/head5.html');

import Element from './../element'

export default class Head5Element extends Element{
  constructor(props) {
    super(props);
    this.tag = 'head5';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
Head5Element.elementTag = 'head5';