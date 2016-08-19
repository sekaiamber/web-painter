let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/headParagraph.html');

import Element from './../element'

export default class HeadParagraghElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'head-paragragh';
    // bind
  }
  renderSample() {
    return (
      <div className={"iconfont-element " + this.tag}></div>
    );
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}