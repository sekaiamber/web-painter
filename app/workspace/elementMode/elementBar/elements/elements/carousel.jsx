let React = require('react');
const crypto = require('crypto');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/carousel.html');

import Element from './../element'
import $ from 'jquery';

export default class CarouselElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'carousel';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate.replace(/@id/g, crypto.createHash('md5').update(`${Date.now()}_${Math.random}`).digest("hex"));
  }
  domDidAdd($dom) {
    $($dom).carousel();
  }
}
CarouselElement.elementTag = 'carousel';