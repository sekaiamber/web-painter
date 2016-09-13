let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/four-pieces.html');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern' 
let attributeGroups = PatternBaseAttributeGroup;


export default class FourPiecesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'four-pieces'
  }
  renderSample() {
    return (
      <img src="assets/images/four-pieces.png" srcSet="assets/images/four-pieces@2x.png 2x"/>
    )
  }
}
FourPiecesPattern.patternTag = 'four-pieces';
FourPiecesPattern.attributeGroups = attributeGroups;
FourPiecesPattern.plainHtmlText = htmlTemplate;