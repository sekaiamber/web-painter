let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/footer/footer1.html');
require('./../../../../../../htmlTemplates/patterns/footer/footer1.scss');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class Footer1Pattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'footer1'
  }
  renderSample() {
    return (
      <img src="assets/images/footer1.png" srcSet="assets/images/footer1@2x.png 2x"/>
    )
  }
}
Footer1Pattern.patternTag = 'footer1';
Footer1Pattern.attributeGroups = attributeGroups;
Footer1Pattern.plainHtmlText = htmlTemplate;