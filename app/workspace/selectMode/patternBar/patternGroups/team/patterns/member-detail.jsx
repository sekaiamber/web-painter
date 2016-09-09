let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/team/member-detail.html');
require('./../../../../../../htmlTemplates/patterns/team/member-detail.scss');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class MemberDetailPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'member-detail'
  }
  renderSample() {
    return (
      <img src="assets/images/member-detail.png" srcSet="assets/images/member-detail@2x.png 2x"/>
    )
  }
}
MemberDetailPattern.patternTag = 'member-detail';
MemberDetailPattern.attributeGroups = attributeGroups;
MemberDetailPattern.plainHtmlText = htmlTemplate;