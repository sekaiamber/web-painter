import {render} from 'react-dom'
import Framework from './framework'

let React = require('react');

require('./index.scss');

render(<Framework />, document.getElementById("container"));
