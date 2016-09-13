let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/three-pieces.html');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern' 
let attributeGroups = PatternBaseAttributeGroup;


export default class ThreePiecesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'three-pieces'
  }
  renderSample() {
    return (
      <img src="assets/images/three-pieces.png" srcSet="assets/images/three-pieces@2x.png 2x"/>
    )
  }
}
ThreePiecesPattern.patternTag = 'three-pieces';
ThreePiecesPattern.attributeGroups = attributeGroups;
ThreePiecesPattern.plainHtmlText = htmlTemplate;