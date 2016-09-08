let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/form.html');

import Element from './../element'

export default class FormElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'form';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
FormElement.elementTag = 'form';