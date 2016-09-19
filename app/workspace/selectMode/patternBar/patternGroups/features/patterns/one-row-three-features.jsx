let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/features/one-row-three-features.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class OneRowThreeFeaturesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'one-row-three-features'
  }
  renderSample() {
    return (
      <img src="assets/images/one-row-three-features.png" srcSet="assets/images/one-row-three-features@2x.png 2x"/>
    )
  }
}
OneRowThreeFeaturesPattern.patternTag = 'one-row-three-features';
OneRowThreeFeaturesPattern.attributeGroups = attributeGroups;
OneRowThreeFeaturesPattern.plainHtmlText = htmlTemplate;