let React = require('react');
let classnames = require('classnames');

require('./paintBar.scss');

import ColorModal from './../../utils/colorModal'

export default class PaintBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      ground: 'background',
      modalVisible: false,
      background: 'rgba(255, 255, 255, 1)',
      foreground: 'rgba(51, 51, 51, 1)'
    }

    // bind
    this.handleModalCancel = this.handleModalCancel.bind(this);
    this.handleModalOk = this.handleModalOk.bind(this);
  }
  componentDidMount() {
    this.updatePainter();
  }
  componentWillUnmount() {
  }
  openColorModal(ground) {
    this.setState({
      ground: ground,
      modalVisible: true,
    })
  }
  handleModalCancel() {
    this.setState({
      modalVisible: false
    })
  }
  handleModalOk(color) {
    let obj = {
      modalVisible: false
    };
    obj[this.state.ground] = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
    this.setState(obj, this.updatePainter);
  }
  updatePainter() {
    exEventEmitter.emit('updatePainter', {
      ground: this.state.ground,
      background: this.state.background,
      foreground: this.state.foreground
    })
  }
  render() {
    let classes = classnames({
      'ground-background': this.state.ground == 'background',
      'ground-foreground': this.state.ground == 'foreground'
    });
    let bgstyle = {
      background: this.state.background
    }
    let fgstyle = {
      background: this.state.foreground
    }
    return (
      <div id="paintBar" className={classes}>
        <div className="paint-bar-background" title="Background Color" style={bgstyle} onClick={() => {this.setState({ground: 'background'}, this.updatePainter)}} onDoubleClick={() => {this.openColorModal('background')}}></div>
        <div className="paint-bar-foreground" title="Font Color" style={fgstyle} onClick={() => {this.setState({ground: 'foreground'}, this.updatePainter)}} onDoubleClick={() => {this.openColorModal('foreground')}}></div>

        <ColorModal visible={this.state.modalVisible} onCancel={this.handleModalCancel} onOk={this.handleModalOk}/>
      </div>
    );
  }
}
