import { Input, Button, Icon, Switch, Select, Slider } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
import _ from 'lodash'
import AssetModal from './../../../utils/assetModal'
let React = require('react');

require('./carousel.scss');

export default class CarouselAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
    _.merge(this.state, {
      currentSelect: null,
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
    let images = this.props.carouselImages;
    if (this.state.currentSelect != null) {
      images[this.state.currentSelect] = {
        type: type,
        src: src,
        target: target
      }
    } else {
      images.push({
        type: type,
        src: src,
        target: target
      })
    }
    this.props.onChange('carouselImages', images);
  }
  openModal(i) {
    this.setState({
      currentSelect: i,
      modalVisible: true
    })
  }
  deleteImage(i) {
    let images = this.props.carouselImages;
    images.splice(i, 1);
    this.props.onChange('carouselImages', images);
  }
  render() {
    return (
      <div className={"attribute-group carousel" + (this.state.slide ? " slide" : "")}>
        <BaseAttributeGroupName name="Slides" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="image-container">
        {this.props.carouselImages.map((d, i) => 
          <div key={i} className="aimage">
            <div className="iconfont element delete" onClick={(e) => this.deleteImage(i)}></div>
            <img src={d.src} onClick={(e) => this.openModal(i)}/>
          </div>
        )}
          <div className="add-bt iconfont element add" onClick={(e) => this.openModal(null)}></div>
        </div>
        <AssetModal
          visible={this.state.modalVisible}
          onCancel={() => this.setState({modalVisible: false})}
          onChose={this.handleChoseImage}
        />
      </div>
    );
  }
}
CarouselAttributeGroup.attributeKeys = [
  'carouselImages'
]
CarouselAttributeGroup.defaultProps = {
  carouselImages: []
}