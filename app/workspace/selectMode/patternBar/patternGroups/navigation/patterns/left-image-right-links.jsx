let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/navigation/left-image-right-links.html');
require('./../../../../../../htmlTemplates/patterns/navigation/left-image-right-links.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern' 
let attributeGroups = PatternBaseAttributeGroup;


export default class LeftImageRightLinksPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-image-right-links'
  }
  renderSample() {
    return (
      <img src="assets/images/left-image-right-links.png" srcSet="assets/images/left-image-right-links@2x.png 2x"/>
    )
  }
}
LeftImageRightLinksPattern.patternTag = 'left-image-right-links';
LeftImageRightLinksPattern.attributeGroups = attributeGroups;
LeftImageRightLinksPattern.plainHtmlText = htmlTemplate;