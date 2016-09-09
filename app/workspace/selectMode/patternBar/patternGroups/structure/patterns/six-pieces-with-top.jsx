let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/six-pieces-with-top.html');
require('./../../../../../../htmlTemplates/patterns/structure/six-pieces-with-top.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern' 
let attributeGroups = PatternBaseAttributeGroup;


export default class SixPiecesWithTopPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'six-pieces-with-top'
  }
  renderSample() {
    return (
      <img src="assets/images/six-pieces-with-top.png" srcSet="assets/images/six-pieces-with-top@2x.png 2x"/>
    )
  }
}
SixPiecesWithTopPattern.patternTag = 'six-pieces-with-top';
SixPiecesWithTopPattern.attributeGroups = attributeGroups;
SixPiecesWithTopPattern.plainHtmlText = htmlTemplate;