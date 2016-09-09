let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/headers/image-heading-paragraph.html');
require('./../../../../../../htmlTemplates/patterns/headers/image-heading-paragraph.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class ImageHeadingParagraphPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'image-heading-paragraph'
  }
  renderSample() {
    return (
      <img src="assets/images/image-heading-paragraph.png" srcSet="assets/images/image-heading-paragraph@2x.png 2x"/>
    )
  }
}
ImageHeadingParagraphPattern.patternTag = 'image-heading-paragraph';
ImageHeadingParagraphPattern.attributeGroups = attributeGroups;
ImageHeadingParagraphPattern.plainHtmlText = htmlTemplate;