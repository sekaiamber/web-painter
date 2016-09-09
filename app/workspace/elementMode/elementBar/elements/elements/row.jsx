let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/row.html');

import Element from './../element'

export default class RowElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'col3row';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
RowElement.elementTag = 'col3row';