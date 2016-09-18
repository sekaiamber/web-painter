let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/headers/image-heading-four-images.html');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class ImageHeadingFourImagesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'image-heading-four-images'
  }
  renderSample() {
    return (
      <img src="assets/images/image-heading-four-images.png" srcSet="assets/images/image-heading-four-images@2x.png 2x"/>
    )
  }
}
ImageHeadingFourImagesPattern.patternTag = 'image-heading-four-images';
ImageHeadingFourImagesPattern.attributeGroups = attributeGroups;
ImageHeadingFourImagesPattern.plainHtmlText = htmlTemplate;