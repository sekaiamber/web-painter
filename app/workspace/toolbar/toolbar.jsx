import Scaler from './scaler/scaler'
import { SelectToop, ElementTool, TextTool, ScreenTool } from './tools/tools'

let React = require('react');

require('./toolbar.scss');

export default class Toolbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <div id="toolbar">
        <div className="tools">
          <SelectToop />
          <ElementTool />
          <TextTool />
          <ScreenTool />
        </div>
        <Scaler />
      </div>
    );
  }
}
