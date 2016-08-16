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
      currentPiece: {tag: ''},
      currentPieceIndex: -1,
      currentPieceActive: false,
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
    exEventEmitter.on('changePatternBarState', (piece, index) => {
      // 取消当前选择再打开面板
      exEventEmitter.emit('cancelSelectd');
      if (piece.tag == this.state.currentPiece.tag && this.state.currentPieceActive) {
        // 再次按下时关闭
        this.setState({
          currentPieceActive: false
        }, () => {
          exEventEmitter.emit('modeChange', 'select');
        })
      } else {
        this.setState({
          currentPiece: piece,
          currentPieceIndex: index,
          currentPieceActive: true,
        }, () => {
          exEventEmitter.emit('modeChange', 'select', 'pattern');
        });
      }
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
