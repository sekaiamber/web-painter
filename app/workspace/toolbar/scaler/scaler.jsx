import { Input } from 'antd';
let React = require('react');

// require('./canvas.scss');

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
    this.setState({
      zoom: vn / 100,
      text: vn.toString()
    }, () => {
      exEventEmitter.emit('zoomChange', this.state.zoom);
    });
  }
  render() {
    return (
      <div id="scaler">
        <Input size="small" value={this.state.text} onChange={this.handleValueChange} addonAfter="%" onBlur={this.handleBlur}/>
      </div>
    );
  }
}
Scaler.defaultProps = {
  zoom: 1
}
