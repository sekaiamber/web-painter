import { Input, Select } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');

import AssetModal from './../../../utils/assetModal'

require('./device.scss');

export default class DeviceAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);

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
    this.props.onChange('deviceContent', {
      type: type,
      target: target,
      src: src
    });
  }
  handleDeleteImage(e) {
    this.props.onChange('deviceContent', {
      type: 'url',
      target: '',
      src: null
    });
    e.stopPropagation()
  }
  render() {
    return (
      <div className={"attribute-group device" + (this.state.slide ? " slide" : "")}>
        <BaseAttributeGroupName name="Device" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Device</div>
          <div className="value">
            <Select size="small" value={this.props.deviceName} onChange={(v) => this.props.onChange('deviceName', v)} >
              <Option value="Apple-Macbook-Air" key="1">Apple Macbook Air</Option>
              <Option value="Apple-Macbook-Gold" key="2">Apple Macbook Gold</Option>
              <Option value="Apple-Macbook-Pro" key="3">Apple Macbook Pro</Option>
              <Option value="Apple-Macbook-Space-Grey" key="4">Apple Macbook Space Grey</Option>
              <Option value="Apple-iMac" key="5">Apple iMac</Option>
              <Option value="Apple-iPad-Air-2-Gold" key="6">Apple iPad Air 2 Gold</Option>
              <Option value="Apple-iPad-Air-2-Silver" key="7">Apple iPad Air 2 Silver</Option>
              <Option value="Apple-iPad-Air-2-Space-Gray" key="8">Apple iPad Air 2 Space Gray</Option>
              <Option value="Apple-iPhone-5c-Blue" key="9">Apple iPhone 5c Blue</Option>
              <Option value="Apple-iPhone-5c-Green" key="10">Apple iPhone 5c Green</Option>
              <Option value="Apple-iPhone-5c-Red" key="11">Apple iPhone 5c Red</Option>
              <Option value="Apple-iPhone-5c-White" key="12">Apple iPhone 5c White</Option>
              <Option value="Apple-iPhone-5c-Yellow" key="13">Apple iPhone 5c Yellow</Option>
              <Option value="Apple-iPhone-5s-Gold" key="14">Apple iPhone 5s Gold</Option>
              <Option value="Apple-iPhone-5s-Silver" key="15">Apple iPhone 5s Silver</Option>
              <Option value="Apple-iPhone-5s-Space-Gray" key="17">Apple iPhone 5s Space Gray</Option>
              <Option value="Apple-iPhone-6s-Gold" key="18">Apple iPhone 6s Gold</Option>
              <Option value="Apple-iPhone-6s-Rose-Gold" key="19">Apple iPhone 6s Rose Gold</Option>
              <Option value="Apple-iPhone-6s-Silver" key="20">Apple iPhone 6s Silver</Option>
              <Option value="Apple-iPhone-6s-Space-Gray" key="21">Apple iPhone 6s Space Gray</Option>
              <Option value="Apple-watch-black" key="22">Apple watch black</Option>
              <Option value="Apple-watch-blue" key="23">Apple watch blue</Option>
              <Option value="Apple-watch-green" key="24">Apple watch green</Option>
              <Option value="Apple-watch-red" key="25">Apple watch red</Option>
              <Option value="Apple-watch-space-grey" key="26">Apple watch space grey</Option>
              <Option value="Apple-watch-white" key="27">Apple watch white</Option>
            </Select>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Height</div>
          <div className="value">
            <Input size="small"
              value={this.props.height}
              onChange={(e) => this.props.onChange('height', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute" style={{height: 100}}>
          <div className="name">Content</div>
          <div className="value">
            <div className="image-container" onClick={(e) => this.setState({modalVisible: true})}>
              {this.props.deviceContent.src ? [
                <div key="0" className="iconfont element delete" onClick={(e) => this.handleDeleteImage(e)}></div>,
                <img key="1" src={this.props.deviceContent.src} />
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
          <div className="name">Top</div>
          <div className="value">
            <Input size="small"
              value={this.props.deviceContentTop}
              onChange={(e) => this.props.onChange('deviceContentTop', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Left</div>
          <div className="value">
            <Input size="small"
              value={this.props.deviceContentLeft}
              onChange={(e) => this.props.onChange('deviceContentLeft', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Width</div>
          <div className="value">
            <Input size="small"
              value={this.props.deviceContentWidth}
              onChange={(e) => this.props.onChange('deviceContentWidth', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Height</div>
          <div className="value">
            <Input size="small"
              value={this.props.deviceContentHeight}
              onChange={(e) => this.props.onChange('deviceContentHeight', e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}
DeviceAttributeGroup.attributeKeys = [
  'deviceName', 'height', 'deviceContent', 'deviceContentTop', 'deviceContentLeft', 'deviceContentHeight', 'deviceContentWidth'
]
DeviceAttributeGroup.defaultProps = {
  deviceContent: {
    type: 'url',
    target: '',
    src: null
  }
}
