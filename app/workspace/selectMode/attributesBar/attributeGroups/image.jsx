import { Input, Button, Icon, Switch, Select } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
import _ from 'lodash'
import AssetModal from './../../../utils/assetModal'
let React = require('react');

require('./image.scss')

export default class ImageAttributeGroup extends BaseAttributeGroup{
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
  handleChange(key, value) {
    let data = this.props.link;
    data[key] = value;
    this.props.onChange('link', data);
  }
  handleChoseImage(type, target, src) {
    this.setState({
      modalVisible: false
    });
    this.props.onChange({
      imageType: type,
      src: src,
      imageTarget: target
    });
  }
  render() {
    return (
      <div className={"attribute-group image" + (this.state.slide ? " slide" : "")}>
        <BaseAttributeGroupName name="Image" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Width</div>
          <div className="value">
            <Input size="small"
              value={this.props.width}
              onChange={(e) => this.props.onChange('width', e.target.value)}
            />
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
        <div className="attribute">
          <div className="name">Alt</div>
          <div className="value">
            <Input size="small"
              value={this.props.alt}
              onChange={(e) => this.props.onChange('alt', e.target.value)}
            />
          </div>
        </div>
        <div className="image-container">
          <img src={this.props.src} onClick={() => this.setState({modalVisible: true})}/>
          <AssetModal
            visible={this.state.modalVisible}
            onCancel={() => this.setState({modalVisible: false})}
            onChose={this.handleChoseImage}
          />
        </div>
      </div>
    );
  }
}
ImageAttributeGroup.attributeKeys = [
  'width', 'height', 'alt', 'src', 'imageType', 'imageTarget'
]
