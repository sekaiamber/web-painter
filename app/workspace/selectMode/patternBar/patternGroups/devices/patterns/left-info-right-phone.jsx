let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/devices/left-info-right-phone.html');
require('./../../../../../../htmlTemplates/patterns/devices/left-info-right-phone.scss');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class LeftInfoRightPhonePattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-info-right-phone'
  }
  renderSample() {
    return (
      <img src="assets/images/left-info-right-phone.png" srcSet="assets/images/left-info-right-phone@2x.png 2x"/>
    )
  }
}
LeftInfoRightPhonePattern.patternTag = 'left-info-right-phone';
LeftInfoRightPhonePattern.attributeGroups = attributeGroups;
LeftInfoRightPhonePattern.plainHtmlText = htmlTemplate;