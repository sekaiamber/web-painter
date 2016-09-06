let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/navigation/center-image-links.html');
require('./../../../../../../htmlTemplates/patterns/navigation/center-image-links.scss');

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

let attributeGroups = [ groups.AppearanceAttributeGroup ];


export default class CenterImageLinksPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'center-image-links'
  }
  renderSample() {
    return (
      <div className="center-image-links" style={{
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
          position: 'relative'
        }}>
          <div className="pattern-element" style={{ height: 0, width: 4, borderWidth: '0 0 2px 0', borderStyle: 'solid', position: 'absolute', top: 8, left: 96 }}></div>
          <div className="pattern-element" style={{ height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', position: 'absolute', top: 15, left: 72 }}></div>
          <div className="pattern-element" style={{ height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', position: 'absolute', top: 15, left: 86 }}></div>
          <div className="pattern-element" style={{ height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', position: 'absolute', top: 15, left: 100 }}></div>
          <div className="pattern-element" style={{ height: 0, width: 10, borderWidth: '0 0 1px 0', borderStyle: 'solid', position: 'absolute', top: 15, left: 114 }}></div>
        </div>
      </div>
    )
  }
}
CenterImageLinksPattern.patternTag = 'center-image-links';
CenterImageLinksPattern.attributeGroups = attributeGroups;
CenterImageLinksPattern.plainHtmlText = htmlTemplate;