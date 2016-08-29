let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/four-pieces.html');
require('./../../../../../../htmlTemplates/patterns/structure/four-pieces.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class FourPiecesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'four-pieces'
  }
  renderSample() {
    return [
      <div className="four-pieces pattern-element" key="1" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(25% - 19px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 20
      }}></div>,
      <div className="four-pieces pattern-element" key="2" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(25% - 19px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 'calc(25% + 13px)'
      }}></div>,
      <div className="four-pieces pattern-element" key="3" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(25% - 19px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 'calc(50% + 6px)'
      }}></div>,
      <div className="four-pieces pattern-element" key="4" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(25% - 19px)',
        height: 'calc(100% - 40px)',
        top: 20,
        right: 20
      }}></div>
    ]
  }
}
FourPiecesPattern.patternTag = 'four-pieces';
FourPiecesPattern.attributeGroups = attributeGroups;
FourPiecesPattern.plainHtmlText = htmlTemplate;