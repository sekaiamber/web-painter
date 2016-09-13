let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/three-pieces-with-top.html');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern' 
let attributeGroups = PatternBaseAttributeGroup;


export default class ThreePiecesWithTopPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'three-pieces-with-top'
  }
  renderSample() {
    return (
      <img src="assets/images/three-pieces-with-top.png" srcSet="assets/images/three-pieces-with-top@2x.png 2x"/>
    )
  }
}
ThreePiecesWithTopPattern.patternTag = 'three-pieces-with-top';
ThreePiecesWithTopPattern.attributeGroups = attributeGroups;
ThreePiecesWithTopPattern.plainHtmlText = htmlTemplate;