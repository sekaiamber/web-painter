let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/navigation/center-image-links.html');
require('./../../../../../../htmlTemplates/patterns/navigation/center-image-links.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class CenterImageLinksPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'center-image-links'
  }
  renderSample() {
    return (
      <img src="assets/images/center-image-links.png" srcSet="assets/images/center-image-links@2x.png 2x"/>
    )
  }
}
CenterImageLinksPattern.patternTag = 'center-image-links';
CenterImageLinksPattern.attributeGroups = attributeGroups;
CenterImageLinksPattern.plainHtmlText = htmlTemplate;