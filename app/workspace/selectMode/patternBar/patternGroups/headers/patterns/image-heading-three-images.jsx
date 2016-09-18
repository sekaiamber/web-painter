let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/headers/image-heading-three-images.html');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class ImageHeadingThreeImagesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'image-heading-three-images'
  }
  renderSample() {
    return (
      <img src="assets/images/image-heading-three-images.png" srcSet="assets/images/image-heading-three-images@2x.png 2x"/>
    )
  }
}
ImageHeadingThreeImagesPattern.patternTag = 'image-heading-three-images';
ImageHeadingThreeImagesPattern.attributeGroups = attributeGroups;
ImageHeadingThreeImagesPattern.plainHtmlText = htmlTemplate;