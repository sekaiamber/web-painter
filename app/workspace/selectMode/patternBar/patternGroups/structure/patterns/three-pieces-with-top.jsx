let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/three-pieces-with-top.html');
require('./../../../../../../htmlTemplates/patterns/structure/three-pieces-with-top.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class ThreePiecesWithTopPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'three-pieces-with-top'
  }
  renderSample() {
    return [
      <div className="three-pieces-with-top pattern-element" key="1" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(33% - 27px)',
        height: 'calc(100% - 70px)',
        top: 50,
        left: 20
      }}></div>,
      <div className="three-pieces-with-top pattern-element" key="2" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(33% - 27px)',
        height: 'calc(100% - 70px)',
        top: 50,
        left: 'calc(33% + 13px)'
      }}></div>,
      <div className="three-pieces-with-top pattern-element" key="3" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(33% - 27px)',
        height: 'calc(100% - 70px)',
        top: 50,
        right: 20
      }}></div>,
      <div className="two-pieces-with-top pattern-element" key="4" style={{
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
ThreePiecesWithTopPattern.patternTag = 'three-pieces-with-top';
ThreePiecesWithTopPattern.attributeGroups = attributeGroups;
ThreePiecesWithTopPattern.plainHtmlText = htmlTemplate;