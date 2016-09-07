let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/two-pieces.html');
require('./../../../../../../htmlTemplates/patterns/structure/two-pieces.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class TwoPiecesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'two-pieces'
  }
  renderSample() {
    return (
      <img src="assets/images/two-pieces.png" srcSet="assets/images/two-pieces@2x.png 2x"/>
    )
  }
}
TwoPiecesPattern.patternTag = 'two-pieces';
TwoPiecesPattern.attributeGroups = attributeGroups;
TwoPiecesPattern.plainHtmlText = htmlTemplate;