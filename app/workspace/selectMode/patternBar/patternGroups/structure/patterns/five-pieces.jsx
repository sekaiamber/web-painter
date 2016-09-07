let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/five-pieces.html');
require('./../../../../../../htmlTemplates/patterns/structure/five-pieces.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class FivePiecesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'five-pieces'
  }
  renderSample() {
    return (
      <img src="assets/images/five-pieces.png" srcSet="assets/images/five-pieces@2x.png 2x"/>
    )
  }
}
FivePiecesPattern.patternTag = 'five-pieces';
FivePiecesPattern.attributeGroups = attributeGroups;
FivePiecesPattern.plainHtmlText = htmlTemplate;