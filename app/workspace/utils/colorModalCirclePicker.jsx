import {Modal, Tabs, Input, Button, Icon} from 'antd'
let React = require('react');

export default class ColorModalCirclePicker extends React.Component {
  constructor(props) {
    super(props);

    // bind
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  handleSelect(color, i) {
    this.props.onChange && this.props.onChange(color, i);
  }
  render() {
    return (
      <div className="circle-picker">
      {this.props.colors.map((color, i) => {
        let width = (this.props.color.r == color.r &&
          this.props.color.g == color.g &&
          this.props.color.b == color.b &&
          this.props.color.a == color.a) ? '3' : '14'
        let style = {
          boxShadow: `inset 0 0 0 ${width}px rgba(${color.r},${color.g},${color.b},${color.a})`
        }
        return (
          <div key={i}>
            <div className="circle-picker-node">
              <div style={style} onClick={() => {this.handleSelect(color, i)}}></div>
            </div>
          </div>
        )
      })}
      </div>
    )
  }
}

