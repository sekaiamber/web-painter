let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/devices/left-phone-right-info.html');
require('./../../../../../../htmlTemplates/patterns/devices/left-phone-right-info.scss');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class LeftPhoneRightInfoPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-phone-right-info'
  }
  renderSample() {
    return (
      <img src="assets/images/left-phone-right-info.png" srcSet="assets/images/left-phone-right-info@2x.png 2x"/>
    )
  }
}
LeftPhoneRightInfoPattern.patternTag = 'left-phone-right-info';
LeftPhoneRightInfoPattern.attributeGroups = attributeGroups;
LeftPhoneRightInfoPattern.plainHtmlText = htmlTemplate;