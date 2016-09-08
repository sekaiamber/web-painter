let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/icon-framed.html');

import Element from './../element'

export default class IconFramedElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'icon-framed';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
IconFramedElement.elementTag = 'icon-framed';