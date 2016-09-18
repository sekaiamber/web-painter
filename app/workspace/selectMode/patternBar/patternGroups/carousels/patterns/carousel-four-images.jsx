let React = require('react');
const crypto = require('crypto');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/carousels/carousel-four-images.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class CarouselFourImagesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'carousel-four-images'
  }
  renderSample() {
    return (
      <img src="assets/images/carousel-four-images.png" srcSet="assets/images/carousel-four-images@2x.png 2x"/>
    )
  }
}
CarouselFourImagesPattern.patternTag = 'carousel-four-images';
CarouselFourImagesPattern.attributeGroups = attributeGroups;
CarouselFourImagesPattern.plainHtmlText = function () {
  return htmlTemplate.replace(/@id/g, crypto.createHash('md5').update(`${Date.now()}_${Math.random}`).digest("hex"));
}
CarouselFourImagesPattern.domDidAdd = function ($dom) {
  $('.carousel', $dom).carousel();
}