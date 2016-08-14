import AttributesBar from './selectMode/attributesBar/attributesBar'
import PatternBar from './selectMode/patternBar/patternBar'
import Canvas from './canvas/canvas'

let React = require('react');

require('./workspace.scss');

export default class Workspace extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mode: '',
      exMode: ''
    }
  }
  componentDidMount() {
    exEventEmitter.on('modeChange', (mode) => {
      console.log(mode);
      this.setState({
        mode: mode
      })
    })
  }
  componentWillUnmount(){
  }
  render() {
    let classes = `mode-${this.state.mode} exmode-${this.state.exMode}`;
    return (
      <div id="workspace" className={classes}>
        <Canvas />
        <AttributesBar />
        <PatternBar />
      </div>
    );
  }
}
