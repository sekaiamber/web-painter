let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/navigation/left-text-right-links.html');
require('./../../../../../../htmlTemplates/patterns/navigation/left-text-right-links.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern' 
let attributeGroups = PatternBaseAttributeGroup;


export default class LeftTextRightLinksPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-text-right-links'
  }
  renderSample() {
    return (
      <img src="assets/images/left-text-right-links.png" srcSet="assets/images/left-text-right-links@2x.png 2x"/>
    )
  }
}
LeftTextRightLinksPattern.patternTag = 'left-text-right-links';
LeftTextRightLinksPattern.attributeGroups = attributeGroups;
LeftTextRightLinksPattern.plainHtmlText = htmlTemplate;