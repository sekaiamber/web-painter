let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/team/member-list.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class MemberListPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'member-list'
  }
  renderSample() {
    return (
      <img src="assets/images/member-list.png" srcSet="assets/images/member-list@2x.png 2x"/>
    )
  }
}
MemberListPattern.patternTag = 'member-list';
MemberListPattern.attributeGroups = attributeGroups;
MemberListPattern.plainHtmlText = htmlTemplate;