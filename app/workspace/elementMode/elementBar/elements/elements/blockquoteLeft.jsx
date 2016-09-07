let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/blockquote-left.html');

import Element from './../element'

export default class BlockquoteLeftElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'blockquote-left';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
BlockquoteLeftElement.elementTag = 'blockquote-left';