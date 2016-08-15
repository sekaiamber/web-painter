import {render} from 'react-dom'
import Framework from './framework'

import ExEventEmitter from './../utils/events'
import PageEditor from './../utils/pageEditor/pageEditor'
import HtmlTemplateReader from './../utils/htmlTemplateReader'

// Event
const exEventEmitter = new ExEventEmitter();
window.exEventEmitter = exEventEmitter;

// page editor
const pageEditor = new PageEditor();
window.pageEditor = pageEditor;

// html template reader
const htmlTemplateReader = new HtmlTemplateReader();
window.htmlTemplateReader = htmlTemplateReader;

// globle var
window._zoom_ = 1;

// Components
let React = require('react');

require('./index.scss');
require('antd/dist/antd.css');

render(<Framework />, document.getElementById("container"));
