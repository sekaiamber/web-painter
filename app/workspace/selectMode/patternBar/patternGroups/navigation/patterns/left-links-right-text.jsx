let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/navigation/left-links-right-text.html');
require('./../../../../../../htmlTemplates/patterns/navigation/left-links-right-text.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class LeftLinksRightTextPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-links-right-text'
  }
  renderSample() {
    return (
      <img src="assets/images/left-links-right-text.png" srcSet="assets/images/left-links-right-text@2x.png 2x"/>
    )
  }
}
LeftLinksRightTextPattern.patternTag = 'left-links-right-text';
LeftLinksRightTextPattern.attributeGroups = attributeGroups;
LeftLinksRightTextPattern.plainHtmlText = htmlTemplate;