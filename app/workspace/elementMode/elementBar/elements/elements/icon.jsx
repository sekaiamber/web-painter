let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/icon.html');

import Element from './../element'

export default class IconElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'icon';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
IconElement.elementTag = 'icon';