let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/navigation/left-links-right-image.html');
require('./../../../../../../htmlTemplates/patterns/navigation/left-links-right-image.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class LeftLinksRightImagePattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-links-right-image'
  }
  renderSample() {
    return (
      <div className="left-links-right-image" style={{
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
          <div className="pattern-element" style={{ float: 'right', height: 0, width: 4, borderWidth: '0 0 2px 0', borderStyle: 'solid' }}></div>
          <div className="pattern-element" style={{ float: 'left', height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', marginRight: 5 }}></div>
          <div className="pattern-element" style={{ float: 'left', height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', marginRight: 5 }}></div>
          <div className="pattern-element" style={{ float: 'left', height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', marginRight: 5 }}></div>
          <div className="pattern-element" style={{ float: 'left', height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', marginRight: 5 }}></div>
        </div>
      </div>
    )
  }
}
LeftLinksRightImagePattern.patternTag = 'left-links-right-image';
LeftLinksRightImagePattern.attributeGroups = attributeGroups;
LeftLinksRightImagePattern.plainHtmlText = htmlTemplate;