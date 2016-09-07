let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/navigation/left-links-right-image.html');
require('./../../../../../../htmlTemplates/patterns/navigation/left-links-right-image.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class LeftLinksRightImagePattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-links-right-image'
  }
  renderSample() {
    return (
      <img src="assets/images/left-links-right-image.png" srcSet="assets/images/left-links-right-image@2x.png 2x"/>
    )
  }
}
LeftLinksRightImagePattern.patternTag = 'left-links-right-image';
LeftLinksRightImagePattern.attributeGroups = attributeGroups;
LeftLinksRightImagePattern.plainHtmlText = htmlTemplate;