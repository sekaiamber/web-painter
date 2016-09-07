let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/round-image.html');

import Element from './../element'

export default class RoundImageElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'round-image';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
RoundImageElement.elementTag = 'round-image';