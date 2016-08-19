let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/head1.html');

import Element from './../element'

export default class Head1Element extends Element{
  constructor(props) {
    super(props);
    this.tag = 'head-1';
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