let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/team/member-panel.html');
require('./../../../../../../htmlTemplates/patterns/team/member-panel.scss');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class MemberPanelPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'member-panel'
  }
  renderSample() {
    return (
      <img src="assets/images/member-panel.png" srcSet="assets/images/member-panel@2x.png 2x"/>
    )
  }
}
MemberPanelPattern.patternTag = 'member-panel';
MemberPanelPattern.attributeGroups = attributeGroups;
MemberPanelPattern.plainHtmlText = htmlTemplate;