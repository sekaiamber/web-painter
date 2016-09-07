let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/image.html');

import Element from './../element'

export default class ImageElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'image';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
ImageElement.elementTag = 'image';