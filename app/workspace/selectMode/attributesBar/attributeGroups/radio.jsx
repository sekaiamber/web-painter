import { Input, Radio, Select, Button, Switch } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class RadioAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className={"attribute-group" + (this.state.slide ? " slide" : "")} >
        <BaseAttributeGroupName name="Radio" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Label</div>
          <div className="value">
            <Input size="small" value={this.props.radioLabel} onChange={(e) => this.props.onChange('radioLabel', e.target.value)}/>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Disable</div>
          <div className="value">
            <Switch  size="small" checked={this.props.radioDisable} onChange={(checked) => this.props.onChange('radioDisable', checked)}/>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Group</div>
          <div className="value">
            <Input size="small" value={this.props.radioName} onChange={(e) => this.props.onChange('radioName', e.target.value)}/>
          </div>
        </div>
      </div>
    );
  }
}
RadioAttributeGroup.attributeKeys = [
  'radioLabel', 'radioDisable', 'radioName'
]