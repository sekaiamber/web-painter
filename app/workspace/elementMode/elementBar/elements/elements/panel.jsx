let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/panel.html');

import Element from './../element'

export default class PanelElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'panel-icon';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
PanelElement.elementTag = 'panel-icon';