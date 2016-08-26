import {render} from 'react-dom'
import Framework from './framework'

import ExEventEmitter from './../utils/events'
import PageEditor from './../utils/pageEditor/pageEditor'


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

render(<Framework />, document.getElementById("container"));

// ipc
require('./../utils/ipc')