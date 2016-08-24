let React = require('react');
let $ = require('jquery');
let classnames = require('classnames');
let _ = require('lodash');

require('./framework.scss');
require('./my.ant.scss');

import Topbar from './../topbar/topbar'
import Workspace from './../workspace/workspace'

export default class Framework extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    console.log('[web painter]: UI load finish');
    exEventEmitter.emit('uiready');
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div id="framework">
        <Topbar />
        <Workspace />
      </div>
    );
  }
}
