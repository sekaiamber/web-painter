let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/two-col-left-big.html');
require('./../../../../../../htmlTemplates/patterns/structure/two-col-left-big.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern' 
let attributeGroups = PatternBaseAttributeGroup;


export default class TwoColLeftBigPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'two-col-left-big'
  }
  renderSample() {
    return (
      <img src="assets/images/two-col-left-big.png" srcSet="assets/images/two-col-left-big@2x.png 2x"/>
    )
  }
}
TwoColLeftBigPattern.patternTag = 'two-col-left-big';
TwoColLeftBigPattern.attributeGroups = attributeGroups;
TwoColLeftBigPattern.plainHtmlText = htmlTemplate;