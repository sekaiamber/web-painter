let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/label.html');

import Element from './../element'

export default class LabelElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'label-icon';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
LabelElement.elementTag = 'label-icon';