let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/three-pieces.html');
require('./../../../../../../htmlTemplates/patterns/structure/three-pieces.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class ThreePiecesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'three-pieces'
  }
  renderSample() {
    return [
      <div className="three-pieces pattern-element" key="1" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(33% - 27px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 20
      }}></div>,
      <div className="three-pieces pattern-element" key="2" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(33% - 27px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 'calc(33% + 13px)'
      }}></div>,
      <div className="three-pieces pattern-element" key="3" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(33% - 27px)',
        height: 'calc(100% - 40px)',
        top: 20,
        right: 20
      }}></div>
    ]
  }
}
ThreePiecesPattern.patternTag = 'three-pieces';
ThreePiecesPattern.attributeGroups = attributeGroups;
ThreePiecesPattern.plainHtmlText = htmlTemplate;