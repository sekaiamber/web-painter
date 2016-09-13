let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/four-pieces-with-top.html');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern' 
let attributeGroups = PatternBaseAttributeGroup;


export default class FourPiecesWithTopPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'four-pieces-with-top'
  }
  renderSample() {
    return (
      <img src="assets/images/four-pieces-with-top.png" srcSet="assets/images/four-pieces-with-top@2x.png 2x"/>
    )
  }
}
FourPiecesWithTopPattern.patternTag = 'four-pieces-with-top';
FourPiecesWithTopPattern.attributeGroups = attributeGroups;
FourPiecesWithTopPattern.plainHtmlText = htmlTemplate;