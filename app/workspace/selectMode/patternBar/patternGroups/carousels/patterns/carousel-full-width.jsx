let React = require('react');
const crypto = require('crypto');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/carousels/carousel-full-width.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class CarouselFullWidthPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'carousel-full-width'
  }
  renderSample() {
    return (
      <img src="assets/images/carousel-full-width.png" srcSet="assets/images/carousel-full-width@2x.png 2x"/>
    )
  }
}
CarouselFullWidthPattern.patternTag = 'carousel-full-width';
CarouselFullWidthPattern.attributeGroups = attributeGroups;
CarouselFullWidthPattern.plainHtmlText = function () {
  return htmlTemplate.replace(/@id/g, crypto.createHash('md5').update(`${Date.now()}_${Math.random}`).digest("hex"));
}
CarouselFullWidthPattern.domDidAdd = function ($dom) {
  $('.carousel', $dom).carousel();
}