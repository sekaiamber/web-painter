let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/navigation/left-links-right-text-image.html');
require('./../../../../../../htmlTemplates/patterns/navigation/left-links-right-text-image.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class LeftLinksRightTextImagePattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-links-right-text-image'
  }
  renderSample() {
    return (
      <img src="assets/images/left-links-right-text-image.png" srcSet="assets/images/left-links-right-text-image@2x.png 2x"/>
    )
  }
}
LeftLinksRightTextImagePattern.patternTag = 'left-links-right-text-image';
LeftLinksRightTextImagePattern.attributeGroups = attributeGroups;
LeftLinksRightTextImagePattern.plainHtmlText = htmlTemplate;