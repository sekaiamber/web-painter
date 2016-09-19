let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/features/three-row-six-features.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class ThreeRowSixFeaturesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'three-row-six-features'
  }
  renderSample() {
    return (
      <img src="assets/images/three-row-six-features.png" srcSet="assets/images/three-row-six-features@2x.png 2x"/>
    )
  }
}
ThreeRowSixFeaturesPattern.patternTag = 'three-row-six-features';
ThreeRowSixFeaturesPattern.attributeGroups = attributeGroups;
ThreeRowSixFeaturesPattern.plainHtmlText = htmlTemplate;