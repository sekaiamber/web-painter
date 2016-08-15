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
      exMode: '',
      currentPiece: null,
      currentPieceIndex: 0
    }
  }
  componentDidMount() {
    exEventEmitter.on('modeChange', (mode, exmode) => {
      exmode = exmode || ''
      this.setState({
        mode: mode,
        exMode: exmode
      });
    });
    exEventEmitter.on('addPattern', (piece, index) => {
      this.setState({
        currentPiece: piece,
        currentPieceIndex: index
      }, () => {
        exEventEmitter.emit('modeChange', 'select', 'pattern')
      });
    });
  }
  componentWillUnmount(){
  }
  render() {
    let classes = `mode-${this.state.mode} exmode-${this.state.exMode}`;
    return (
      <div id="workspace" className={classes}>
        <Canvas />
        <AttributesBar />
        <PatternBar piece={this.state.currentPiece} index={this.state.currentPieceIndex}/>
      </div>
    );
  }
}
