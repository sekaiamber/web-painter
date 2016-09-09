import { Input, Button, Icon, Switch, Select, Slider } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
import _ from 'lodash'
let React = require('react');

import AssetModal from './../../../utils/assetModal'

require('./background.scss');

export default class BackgroundAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
    _.merge(this.state, {
      modalVisible: false
    });

    // bind
    this.handleChoseImage = this.handleChoseImage.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  handleChoseImage(type, target, src) {
    this.setState({
      modalVisible: false
    });
    this.props.onChange('backgroundImage', {
      type: type,
      target: target,
      src: src
    });
  }
  handleDeleteImage(e) {
    this.props.onChange('backgroundImage', {
      type: 'url',
      target: '',
      src: null
    });
    e.stopPropagation()
  }
  render() {
    return (
      <div className={"attribute-group background" + (this.state.slide ? " slide" : "")}>
        <BaseAttributeGroupName name="Background" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute" style={{height: 100}}>
          <div className="name">Image</div>
          <div className="value">
            <div className="image-container" onClick={(e) => this.setState({modalVisible: true})}>
              {this.props.backgroundImage.src ? [
                <div key="0" className="iconfont element delete" onClick={(e) => this.handleDeleteImage(e)}></div>,
                <img key="1" src={this.props.backgroundImage.src} />
              ]: undefined}
            </div>
            <AssetModal
              visible={this.state.modalVisible}
              onCancel={() => this.setState({modalVisible: false})}
              onChose={this.handleChoseImage}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Style</div>
          <div className="value">
            <Select size="small" value={this.props.backgroundStyle} onChange={(v) => this.props.onChange('backgroundStyle', v)} >
                <Option value="none" key="1">None</Option>
                <Option value="fill" key="2">Fill</Option>
                <Option value="repeat" key="3">Repeat</Option>
                <Option value="center" key="3">Center</Option>
            </Select>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Texture</div>
          <div className="value">
            <Select size="small" value={this.props.backgroundTexture} onChange={(v) => this.props.onChange('backgroundTexture', v)} >
              <Option value="none" key="1">None</Option>
              <Option value="paper" key="2">Paper</Option>
              <Option value="fabric" key="3">Fabric</Option>
              <Option value="geometry-shapes" key="4">Geometry Shapes</Option>
              <Option value="geometry-shapes-2" key="5">Geometry Shapes 2</Option>
              <Option value="pixels" key="6">Pixels</Option>
              <Option value="dots" key="7">Dots</Option>
              <Option value="diagonal-lines" key="8">Diagonal Lines</Option>
              <Option value="vertical-lines" key="9">Vertical Lines</Option>
              <Option value="square" key="10">Square</Option>
              <Option value="square-lg" key="11">Square large</Option>
              <Option value="darken" key="12">Darken</Option>
              <Option value="darken-strong" key="13">Darken Strong</Option>
            </Select>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Color</div>
          <div className="value">
            <Input size="small"
              value={this.props.backgroundColor}
              onChange={(e) => this.props.onChange('backgroundColor', e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}
BackgroundAttributeGroup.attributeKeys = [
  'backgroundStyle', 'backgroundImage', 'backgroundColor', 'backgroundTexture'
]
BackgroundAttributeGroup.defaultProps = {
  backgroundImage: {
    type: 'url',
    target: '',
    src: null
  }
}
