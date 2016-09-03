import { Progress } from 'antd';

let React = require('react');
let $ = require('jquery');
let classnames = require('classnames');
let _ = require('lodash');

require('./processBar.scss');

export default class ProcessBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      visiable: false
    }
  }
  componentDidMount() {
    exEventEmitter.on('processShow', (percent, callback) => {
      callback = callback || (() => {})
      this.setState({
        percent: percent,
        visiable: true
      }, callback);
    });
    exEventEmitter.on('processHide', (callback) => {
      callback = callback || (() => {})
      this.setState({
        percent: 0,
        visiable: false
      }, callback);
    })
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div id="ProcessBar" className={this.state.visiable ? "show" : "hide"}>
        <Progress className="wp-process" type="circle" percent={this.state.percent} />
      </div>
    );
  }
}
