let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/two-pieces-with-top.html');
require('./../../../../../../htmlTemplates/patterns/structure/two-pieces-with-top.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class TwoPiecesWithTopPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'two-pieces-with-top'
  }
  renderSample() {
    return (
      <img src="assets/images/two-pieces-with-top.png" srcSet="assets/images/two-pieces-with-top@2x.png 2x"/>
    )
  }
}
TwoPiecesWithTopPattern.patternTag = 'two-pieces-with-top';
TwoPiecesWithTopPattern.attributeGroups = attributeGroups;
TwoPiecesWithTopPattern.plainHtmlText = htmlTemplate;