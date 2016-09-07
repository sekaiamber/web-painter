let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/one-piece.html');
require('./../../../../../../htmlTemplates/patterns/structure/one-piece.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class OnePiecePattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'one-piece'
  }
  renderSample() {
    return (
      <img src="assets/images/one-piece.png" srcSet="assets/images/one-piece@2x.png 2x"/>
    )
  }
}
OnePiecePattern.patternTag = 'one-piece';
OnePiecePattern.attributeGroups = attributeGroups;
OnePiecePattern.plainHtmlText = htmlTemplate;