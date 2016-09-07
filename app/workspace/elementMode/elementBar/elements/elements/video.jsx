let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/video.html');

import Element from './../element'

export default class VideoElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'video';
    // bind
  }

  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
VideoElement.elementTag = 'video';