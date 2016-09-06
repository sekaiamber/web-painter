let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/structure/two-col-left-big.html');
require('./../../../../../../htmlTemplates/patterns/structure/two-col-left-big.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class TwoColLeftBigPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'two-col-left-big'
  }
  renderSample() {
    return [
      <div className="two-col-left-big pattern-element" key="1" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(70% - 25px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 20
      }}></div>,
      <div className="two-col-left-big pattern-element" key="2" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(30% - 25px)',
        height: 'calc(100% - 40px)',
        top: 20,
        right: 20
      }}></div>
    ]
  }
}
TwoColLeftBigPattern.patternTag = 'two-col-left-big';
TwoColLeftBigPattern.attributeGroups = attributeGroups;
TwoColLeftBigPattern.plainHtmlText = htmlTemplate;