let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/head6.html');

import Element from './../element'

export default class Head6Element extends Element{
  constructor(props) {
    super(props);
    this.tag = 'head6';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
Head6Element.elementTag = 'head6';