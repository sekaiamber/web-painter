let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/five-pieces-with-top.html');
require('./../../../../../../htmlTemplates/patterns/structure/five-pieces-with-top.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class FivePiecesWithTopPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'five-pieces-with-top'
  }
  renderSample() {
    return [
      <div className="five-pieces-with-top pattern-element" key="1" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(20% - 18px)',
        height: 'calc(100% - 70px)',
        top: 50,
        left: 20
      }}></div>,
      <div className="five-pieces-with-top pattern-element" key="2" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(20% - 18px)',
        height: 'calc(100% - 70px)',
        top: 50,
        left: 'calc(20% + 14px)'
      }}></div>,
      <div className="five-pieces-with-top pattern-element" key="3" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(20% - 18px)',
        height: 'calc(100% - 70px)',
        top: 50,
        left: 'calc(40% + 8px)'
      }}></div>,
      <div className="five-pieces-with-top pattern-element" key="4" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(20% - 18px)',
        height: 'calc(100% - 70px)',
        top: 50,
        left: 'calc(60% + 2px)'
      }}></div>,
      <div className="five-pieces-with-top pattern-element" key="5" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(20% - 18px)',
        height: 'calc(100% - 70px)',
        top: 50,
        right: 20
      }}></div>,
      <div className="two-pieces-with-top pattern-element" key="6" style={{
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
FivePiecesWithTopPattern.patternTag = 'five-pieces-with-top';
FivePiecesWithTopPattern.attributeGroups = attributeGroups;
FivePiecesWithTopPattern.plainHtmlText = htmlTemplate;