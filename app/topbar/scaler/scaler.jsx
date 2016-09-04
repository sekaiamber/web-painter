import { Input } from 'antd';
let React = require('react');

require('./scaler.scss');

export default class Scaler extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      zoom: this.props.zoom,
      text: (this.props.zoom * 100).toString()
    }
    // binding
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  componentDidMount() {
    exEventEmitter.on('zoomChange', (zoom) => {
      this.setState({
        zoom: zoom,
        text: (zoom * 100).toString()
      }, () => {
        window._zoom_ = this.state.zoom;
        exEventEmitter.emit('afterZoomChange', this.state.zoom);
      });
    });
  }
  componentWillUnmount(){
  }
  handleValueChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  handleBlur(e) {
    let v = e.target.value;
    let parser = v.indexOf('.') != -1 ? parseFloat : parseInt;
    let vn = parser(v);
    if (isNaN(vn)) {
      this.setState({
        text: (this.state.zoom * 100).toString()
      });
      return
    }
    if (vn == parseInt(vn)) {
      vn = parseInt(vn);
    }
    if (vn < 50) {
      vn = 50;
    }
    exEventEmitter.emit('zoomChange', vn / 100);
  }
  render() {
    return (
      <div id="scaler">
        <span className="iconfont scaler topbar"></span>
        <span className="scaler-input"><input type="text" value={this.state.text} onChange={this.handleValueChange} onBlur={this.handleBlur} /></span>
        <span className="scaler-percent">%</span>
      </div>
    );
  }
}
Scaler.defaultProps = {
  zoom: 1
}
