let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/head2.html');

import Element from './../element'

export default class Head2Element extends Element{
  constructor(props) {
    super(props);
    this.tag = 'head2';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
Head2Element.elementTag = 'head2';