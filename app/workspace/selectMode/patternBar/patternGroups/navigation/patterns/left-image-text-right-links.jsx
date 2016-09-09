let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/navigation/left-image-text-right-links.html');
require('./../../../../../../htmlTemplates/patterns/navigation/left-image-text-right-links.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class LeftImageTextRightLinksPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-image-text-right-links'
  }
  renderSample() {
    return (
      <img src="assets/images/left-image-text-right-links.png" srcSet="assets/images/left-image-text-right-links@2x.png 2x"/>
    )
  }
}
LeftImageTextRightLinksPattern.patternTag = 'left-image-text-right-links';
LeftImageTextRightLinksPattern.attributeGroups = attributeGroups;
LeftImageTextRightLinksPattern.plainHtmlText = htmlTemplate;