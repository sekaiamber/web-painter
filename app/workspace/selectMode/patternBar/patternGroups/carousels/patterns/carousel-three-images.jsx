let React = require('react');
const crypto = require('crypto');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/carousels/carousel-three-images.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class CarouselThreeImagesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'carousel-three-images'
  }
  renderSample() {
    return (
      <img src="assets/images/carousel-three-images.png" srcSet="assets/images/carousel-three-images@2x.png 2x"/>
    )
  }
}
CarouselThreeImagesPattern.patternTag = 'carousel-three-images';
CarouselThreeImagesPattern.attributeGroups = attributeGroups;
CarouselThreeImagesPattern.plainHtmlText = function () {
  return htmlTemplate.replace(/@id/g, crypto.createHash('md5').update(`${Date.now()}_${Math.random}`).digest("hex"));
}
CarouselThreeImagesPattern.domDidAdd = function ($dom) {
  $('.carousel', $dom).carousel();
}