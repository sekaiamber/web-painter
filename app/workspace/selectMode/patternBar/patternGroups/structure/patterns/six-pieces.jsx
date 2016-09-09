let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/six-pieces.html');
require('./../../../../../../htmlTemplates/patterns/structure/six-pieces.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern' 
let attributeGroups = PatternBaseAttributeGroup;


export default class SixPiecesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'six-pieces'
  }
  renderSample() {
    return (
      <img src="assets/images/six-pieces.png" srcSet="assets/images/six-pieces@2x.png 2x"/>
    )
  }
}
SixPiecesPattern.patternTag = 'six-pieces';
SixPiecesPattern.attributeGroups = attributeGroups;
SixPiecesPattern.plainHtmlText = htmlTemplate;