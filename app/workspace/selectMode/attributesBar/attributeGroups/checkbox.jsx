import { Input, Radio, Select, Button, Switch } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class CheckboxAttributeGroup extends BaseAttributeGroup{
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
        <BaseAttributeGroupName name="Checkbox" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Label</div>
          <div className="value">
            <Input size="small" value={this.props.checkboxLabel} onChange={(e) => this.props.onChange('checkboxLabel', e.target.value)}/>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Disable</div>
          <div className="value">
            <Switch  size="small" checked={this.props.checkboxDisable} onChange={(checked) => this.props.onChange('checkboxDisable', checked)}/>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Group</div>
          <div className="value">
            <Input size="small" value={this.props.checkboxName} onChange={(e) => this.props.onChange('checkboxName', e.target.value)}/>
          </div>
        </div>
      </div>
    );
  }
}
CheckboxAttributeGroup.attributeKeys = [
  'checkboxLabel', 'checkboxDisable', 'checkboxName'
]