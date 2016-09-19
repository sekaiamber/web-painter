let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/features/one-row-four-features.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class OneRowFourFeaturesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'one-row-four-features'
  }
  renderSample() {
    return (
      <img src="assets/images/one-row-four-features.png" srcSet="assets/images/one-row-four-features@2x.png 2x"/>
    )
  }
}
OneRowFourFeaturesPattern.patternTag = 'one-row-four-features';
OneRowFourFeaturesPattern.attributeGroups = attributeGroups;
OneRowFourFeaturesPattern.plainHtmlText = htmlTemplate;