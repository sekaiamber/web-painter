import {Modal, Tabs, Input, Button, Icon} from 'antd'
const TabPane = Tabs.TabPane;

let React = require('react');

import { CirclePicker, ChromePicker } from 'react-color';
import ColorModalCirclePicker from './colorModalCirclePicker'

require('./colorModal.scss');


export default class ColorModal extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: {
        r: '0',
        g: '0',
        b: '0',
        a: '1',
      },
      selectedColorIndex: -1,
      currentColor: {
        r: '0',
        g: '0',
        b: '0',
        a: '1',
      },
      selected: false,
      colors: pageEditor.project.colors
    }

    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCircleSelect = this.handleCircleSelect.bind(this);
    this.handleCircleCancel = this.handleCircleCancel.bind(this);
    this.handleDelectCircleColor = this.handleDelectCircleColor.bind(this);
    this.handleChangeCircleColor = this.handleChangeCircleColor.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.addNewColor = this.addNewColor.bind(this);

  }
  componentDidMount() {
    exEventEmitter.on('projectColorsDidUpdate', () => {
      this.setState({
        colors: pageEditor.project.colors
      });
    })
  }
  componentWillUnmount() {
  }
  handleCancel() {
    this.props.onCancel()
  }
  handleOk() {
    this.props.onOk && this.props.onOk(this.state.currentColor);
  }
  handleCircleSelect(color, i) {
    this.setState({
      selectedColor: color,
      selectedColorIndex: i,
      currentColor: color,
      selected: true,
    })
  }
  handleCircleCancel(e) {
    if (e.target == e.currentTarget) {
      this.setState({
        selectedColor: {
          r: '0',
          g: '0',
          b: '0',
          a: '0',
        },
        selectedColorIndex: -1,
        selected: false
      })
    }
  }
  handleDelectCircleColor() {
    if (this.state.selected && this.state.selectedColorIndex > -1) {
      pageEditor.project.colors.splice(this.state.selectedColorIndex, 1);
      this.setState({
        colors: pageEditor.project.colors,
        selectedColor: {
          r: '0',
          g: '0',
          b: '0',
          a: '0',
        },
        selectedColorIndex: -1,
        selected: false
      });
    }
  }
  handleChangeCircleColor() {
    if (this.state.selected && this.state.selectedColorIndex > -1) {
      pageEditor.project.colors[this.state.selectedColorIndex] = this.state.currentColor;
      this.setState({
        colors: pageEditor.project.colors,
        selectedColor: this.state.currentColor
      });
    }
  }
  handleSelect(color) {
    this.setState({
      currentColor: color.rgb
    })
  }
  addNewColor() {
    pageEditor.project.colors.push(this.state.currentColor);
    this.setState({
      colors: pageEditor.project.colors
    });
  }
  render () {
    let colorText = `rgba(${this.state.currentColor.r}, ${this.state.currentColor.g}, ${this.state.currentColor.b}, ${this.state.currentColor.a})`
    return (
      <Modal className="color-modal"
        visible={this.props.visible}
        onCancel={this.handleCancel}
        onOk={this.handleOk}
        title="Color Manager"
      >
        <div className="color-container">
          <div className="shower" onClick={this.handleCircleCancel}>
            <div>当前选择：</div>
            <div className="current-color" style={{background: colorText}}>{colorText}</div>
            <div>颜色库：</div>
            <ColorModalCirclePicker color={this.state.selectedColor} onChange={this.handleCircleSelect} colors={this.state.colors}/>
          </div>
          <div className="picker">
            <ChromePicker color={this.state.currentColor} onChange={this.handleSelect}/>
            {this.state.selected ? 
            <div>
              <Button onClick={this.handleChangeCircleColor}>Change</Button>
              <Button onClick={this.handleDelectCircleColor}>Delete</Button>
            </div> : null}
            <Button onClick={this.addNewColor}>Add New Color</Button>
          </div>
        </div>
      </Modal>
    )
  }
}