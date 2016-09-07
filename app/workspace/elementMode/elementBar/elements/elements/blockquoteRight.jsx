let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/blockquote-right.html');

import Element from './../element'

export default class BlockquoteRightElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'blockquote-right';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
BlockquoteRightElement.elementTag = 'blockquote-right';