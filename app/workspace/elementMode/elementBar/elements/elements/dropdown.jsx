let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/dropdown.html');

import Element from './../element'

export default class DropdownElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'dropdown';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
DropdownElement.elementTag = 'dropdown';