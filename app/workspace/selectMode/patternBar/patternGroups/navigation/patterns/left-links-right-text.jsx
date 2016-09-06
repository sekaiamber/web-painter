let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/navigation/left-links-right-text.html');
require('./../../../../../../htmlTemplates/patterns/navigation/left-links-right-text.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class LeftLinksRightTextPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-links-right-text'
  }
  renderSample() {
    return (
      <div className="left-links-right-text" style={{
        background: '#474747',
        height: '100%',
        width: '100%'
      }}>
        <div className="nav pattern-element" style={{
          borderStyle: 'solid',
          borderWidth: 0,
          borderBottomWidth: 1,
          height: '25px',
          background: '#313435',
          padding: '10px'
        }}>
          <div className="pattern-element" style={{ float: 'right', height: 0, width: 25, borderWidth: '0 0 2px 0', borderStyle: 'solid' }}></div>
          <div className="pattern-element" style={{ float: 'left', height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', marginRight: 5 }}></div>
          <div className="pattern-element" style={{ float: 'left', height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', marginRight: 5 }}></div>
          <div className="pattern-element" style={{ float: 'left', height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', marginRight: 5 }}></div>
          <div className="pattern-element" style={{ float: 'left', height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', marginRight: 5 }}></div>
        </div>
      </div>
    )
  }
}
LeftLinksRightTextPattern.patternTag = 'left-links-right-text';
LeftLinksRightTextPattern.attributeGroups = attributeGroups;
LeftLinksRightTextPattern.plainHtmlText = htmlTemplate;