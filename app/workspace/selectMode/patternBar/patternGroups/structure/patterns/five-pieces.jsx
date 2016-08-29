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
    return [
      <div className="five-pieces pattern-element" key="1" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(20% - 18px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 20
      }}></div>,
      <div className="five-pieces pattern-element" key="2" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(20% - 18px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 'calc(20% + 14px)'
      }}></div>,
      <div className="five-pieces pattern-element" key="3" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(20% - 18px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 'calc(40% + 8px)'
      }}></div>,
      <div className="five-pieces pattern-element" key="4" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(20% - 18px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 'calc(60% + 2px)'
      }}></div>,
      <div className="five-pieces pattern-element" key="5" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(20% - 18px)',
        height: 'calc(100% - 40px)',
        top: 20,
        right: 20
      }}></div>
    ]
  }
}
FivePiecesPattern.patternTag = 'five-pieces';
FivePiecesPattern.attributeGroups = attributeGroups;
FivePiecesPattern.plainHtmlText = htmlTemplate;