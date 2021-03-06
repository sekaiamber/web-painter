let React = require('react');
const crypto = require('crypto');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/carousels/carousel-heading-paragraph.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class CarouselHeadingParagraphPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'carousel-heading-paragraph'
  }
  renderSample() {
    return (
      <img src="assets/images/carousel-heading-paragraph.png" srcSet="assets/images/carousel-heading-paragraph@2x.png 2x"/>
    )
  }
}
CarouselHeadingParagraphPattern.patternTag = 'carousel-heading-paragraph';
CarouselHeadingParagraphPattern.attributeGroups = attributeGroups;
CarouselHeadingParagraphPattern.plainHtmlText = function () {
  return htmlTemplate.replace(/@id/g, crypto.createHash('md5').update(`${Date.now()}_${Math.random}`).digest("hex"));
}
CarouselHeadingParagraphPattern.domDidAdd = function ($dom) {
  $('.carousel', $dom).carousel();
}