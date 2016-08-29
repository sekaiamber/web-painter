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
    return [
      <div className="two-pieces pattern-element" key="1" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(50% - 30px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 20
      }}></div>,
      <div className="two-pieces pattern-element" key="2" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(50% - 30px)',
        height: 'calc(100% - 40px)',
        top: 20,
        right: 20
      }}></div>
    ]
  }
}
TwoPiecesPattern.patternTag = 'two-pieces';
TwoPiecesPattern.attributeGroups = attributeGroups;
TwoPiecesPattern.plainHtmlText = htmlTemplate;