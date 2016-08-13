import { SelectToop, ElementTool, PaintTool } from './tools/tools'

let React = require('react');

require('./toolbar.scss');

export default class Toolbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      toolsActive_select: false,
      toolsActive_element: false,
      toolsActive_paint: false,
    }
    this.tools = ['select', 'element', 'paint'];
    // bind
    this.changeTool = this.changeTool.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  changeTool(tag) {
    let active = {};
    this.tools.map((key) => {
      active['toolsActive_' + key] = false;
    });
    active['toolsActive_' + tag] = true;
    this.setState(active);
  }
  render() {
    return (
      <div id="toolbar">
        <SelectToop active={this.state.toolsActive_select} onActive={this.changeTool}/>
        <ElementTool active={this.state.toolsActive_element} onActive={this.changeTool}/>
        <PaintTool active={this.state.toolsActive_paint} onActive={this.changeTool}/>
      </div>
    );
  }
}
