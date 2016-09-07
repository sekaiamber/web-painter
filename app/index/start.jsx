import {render} from 'react-dom'
import Framework from './framework'

import ExEventEmitter from './../utils/events'
import PageEditor from './../utils/pageEditor/pageEditor'

import $ from 'jquery'

// jquery
window.jQuery = $;

// bootstrap
require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');

// jquery plugin
require('./../../assets/scripts/carousel')

// Event
const exEventEmitter = new ExEventEmitter();
window.exEventEmitter = exEventEmitter;

// page editor
const pageEditor = new PageEditor();
window.pageEditor = pageEditor;

// globle var
window._zoom_ = 1;

// Components
let React = require('react');

require('./index.scss');
require('antd/dist/antd.css');

$(document).ready(() => {
  render(<Framework />, document.getElementById("container"));
  console.log('[web painter]: UI load finish');
  exEventEmitter.emit('uiready');
});

// ipc
require('./../utils/ipc')