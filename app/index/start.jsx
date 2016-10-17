import {render} from 'react-dom'
import Framework from './framework'

import ExEventEmitter from './../utils/events'
import PageEditor from './../utils/pageEditor/pageEditor'

import $ from 'jquery'

const ipc = require('electron').ipcRenderer

// disable pinch zoom in chromium
require('electron').webFrame.setZoomLevelLimits(1, 1)

// jquery
window.jQuery = $;

// antd
require('./index.scss');
require('antd/dist/antd.css');
// bootstrap
require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');

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


$(document).ready(() => {
  render(<Framework />, document.getElementById("container"));
  console.log('[web painter]: UI load finish');
  exEventEmitter.emit('uiready');

  // auto open project
  pageEditor.project.filepath && ipc.emit('open-project', null, pageEditor.project.filepath);
});

// ipc
require('./../utils/ipc')