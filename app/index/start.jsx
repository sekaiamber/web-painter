import {render} from 'react-dom'
import Framework from './framework'

import ExEventEmitter from './../utils/events'

// Event
const exEventEmitter = new ExEventEmitter();
window.exEventEmitter = exEventEmitter;

// Components
let React = require('react');

require('./index.scss');
require('antd/dist/antd.css');

render(<Framework />, document.getElementById("container"));
