let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/six-pieces-with-top.html');
require('./../../../../../../htmlTemplates/patterns/structure/six-pieces-with-top.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class SixPiecesWithTopPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'six-pieces-with-top'
  }
  renderSample() {
    return [
      <div className="six-pieces-with-top pattern-element" key="1" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 70px)',
        top: 50,
        left: 20
      }}></div>,
      <div className="six-pieces-with-top pattern-element" key="2" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 70px)',
        top: 50,
        left: 'calc(16% + 16px)'
      }}></div>,
      <div className="six-pieces-with-top pattern-element" key="3" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 70px)',
        top: 50,
        left: 'calc(32% + 12px)'
      }}></div>,
      <div className="six-pieces-with-top pattern-element" key="4" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 70px)',
        top: 50,
        left: 'calc(48% + 8px)'
      }}></div>,
      <div className="six-pieces-with-top pattern-element" key="5" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 70px)',
        top: 50,
        left: 'calc(64% + 4px)'
      }}></div>,
      <div className="six-pieces-with-top pattern-element" key="6" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(16% - 13px)',
        height: 'calc(100% - 70px)',
        top: 50,
        right: 20
      }}></div>,
      <div className="two-pieces-with-top pattern-element" key="7" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(100% - 40px)',
        height: '20px',
        top: 20,
        right: 20
      }}></div>
    ]
  }
}
SixPiecesWithTopPattern.patternTag = 'six-pieces-with-top';
SixPiecesWithTopPattern.attributeGroups = attributeGroups;
SixPiecesWithTopPattern.plainHtmlText = htmlTemplate;