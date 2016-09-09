let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/two-col-right-big.html');
require('./../../../../../../htmlTemplates/patterns/structure/two-col-right-big.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern' 
let attributeGroups = PatternBaseAttributeGroup;


export default class TwoColRightBigPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'two-col-right-big'
  }
  renderSample() {
    return (
      <img src="assets/images/two-col-right-big.png" srcSet="assets/images/two-col-right-big@2x.png 2x"/>
    )
  }
}
TwoColRightBigPattern.patternTag = 'two-col-right-big';
TwoColRightBigPattern.attributeGroups = attributeGroups;
TwoColRightBigPattern.plainHtmlText = htmlTemplate;