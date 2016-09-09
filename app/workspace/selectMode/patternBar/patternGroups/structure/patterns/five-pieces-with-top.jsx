let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/five-pieces-with-top.html');
require('./../../../../../../htmlTemplates/patterns/structure/five-pieces-with-top.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern' 
let attributeGroups = PatternBaseAttributeGroup;


export default class FivePiecesWithTopPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'five-pieces-with-top'
  }
  renderSample() {
    return (
      <img src="assets/images/five-pieces-with-top.png" srcSet="assets/images/five-pieces-with-top@2x.png 2x"/>
    )
  }
}
FivePiecesWithTopPattern.patternTag = 'five-pieces-with-top';
FivePiecesWithTopPattern.attributeGroups = attributeGroups;
FivePiecesWithTopPattern.plainHtmlText = htmlTemplate;