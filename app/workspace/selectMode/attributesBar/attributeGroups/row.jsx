import { Input, Radio, Select, Button, Switch } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class RowAttributeGroup extends BaseAttributeGroup{
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
        <BaseAttributeGroupName name="Row" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Count</div>
          <div className="value">
            <Select size="small" value={this.props.rowCount} onChange={(v) => this.props.onChange('rowCount', parseInt(v))} >
              <Option value="1" key="1">1</Option>
              <Option value="2" key="2">2</Option>
              <Option value="3" key="3">3</Option>
              <Option value="4" key="4">4</Option>
              <Option value="6" key="5">6</Option>
            </Select>
          </div>
        </div>
      </div>
    );
  }
}
RowAttributeGroup.attributeKeys = [
  'rowCount'
]