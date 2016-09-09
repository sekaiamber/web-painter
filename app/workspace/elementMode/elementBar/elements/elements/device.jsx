let React = require('react');
let htmlTemplate = require('./../../../../../htmlTemplates/elements/device.html');
require('./../../../../../htmlTemplates/elements/device.scss');

import Element from './../element'

export default class DeviceElement extends Element{
  constructor(props) {
    super(props);
    this.tag = 'phone-device';
    // bind
  }
  // page editor function
  getPlainHtmlText() {
    return htmlTemplate;
  }
}
DeviceElement.elementTag = 'phone-device';