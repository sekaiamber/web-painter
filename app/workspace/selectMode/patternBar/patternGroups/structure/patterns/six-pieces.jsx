let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/six-pieces.html');
require('./../../../../../../htmlTemplates/patterns/structure/six-pieces.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class SixPiecesPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'six-pieces'
  }
  renderSample() {
    return [
      <div className="six-pieces pattern-element" key="1" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 20
      }}></div>,
      <div className="six-pieces pattern-element" key="2" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 'calc(16% + 16px)'
      }}></div>,
      <div className="six-pieces pattern-element" key="3" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 'calc(32% + 12px)'
      }}></div>,
      <div className="six-pieces pattern-element" key="4" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 'calc(48% + 8px)'
      }}></div>,
      <div className="six-pieces pattern-element" key="5" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 'calc(64% + 4px)'
      }}></div>,
      <div className="six-pieces pattern-element" key="6" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 40px)',
        top: 20,
        right: 20
      }}></div>
    ]
  }
}
SixPiecesPattern.patternTag = 'six-pieces';
SixPiecesPattern.attributeGroups = attributeGroups;
SixPiecesPattern.plainHtmlText = htmlTemplate;