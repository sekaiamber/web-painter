let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/carousels/carousel-heading-paragraph.html');
require('./../../../../../../htmlTemplates/patterns/carousels/carousel-heading-paragraph.scss');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


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
CarouselHeadingParagraphPattern.plainHtmlText = htmlTemplate;
CarouselHeadingParagraphPattern.domDidAdd = function ($dom) {
  $('.wp-carousel', $dom).carousel();
}