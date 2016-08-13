import AttributesBar from './attributesBar/attributesBar'
import Canvas from './canvas/canvas'

let React = require('react');

require('./workspace.scss');

export default class Workspace extends React.Component{
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
      <div id="workspace">
        <Canvas />
        <AttributesBar />
      </div>
    );
  }
}
