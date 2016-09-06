import { Input, Button, Icon, Switch, Select } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
import _ from 'lodash'
import IconModal from './../../../utils/iconModal'
let React = require('react');

require('./icon.scss')

export default class IconAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
    _.merge(this.state, {
      modalVisible: false
    });

    // bind
    this.handleChoseIcon = this.handleChoseIcon.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  handleChoseIcon(type, tag) {
    this.props.onChange('iconTag', tag);
    this.setState({modalVisible: false});
  }
  render() {
    return (
      <div className={"attribute-group icon" + (this.state.slide ? " slide" : "")}>
        <BaseAttributeGroupName name="Icon" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className={"icon-container " + this.props.iconTag} onClick={() => this.setState({modalVisible: true})}>
          <IconModal
            visible={this.state.modalVisible}
            onCancel={() => this.setState({modalVisible: false})}
            onChose={this.handleChoseIcon}
          />
        </div>
        <div className="attribute">
          <div className="name">Size</div>
          <div className="value">
            <Input size="small"
              value={this.props.iconSize}
              onChange={(e) => this.props.onChange('iconSize', e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}
IconAttributeGroup.attributeKeys = [
  'iconTag', 'iconSize'
]
