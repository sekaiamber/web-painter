import { Input, Radio, Select } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class InputAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className={"attribute-group" + (this.state.slide ? " slide" : "")}>
        <BaseAttributeGroupName name="Input" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Placeholder</div>
          <div className="value">
            <Input size="small"
              value={this.props.inputPlaceholder}
              onChange={(e) => this.props.onChange('inputPlaceholder', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Prefix</div>
          <div className="value">
            <Input size="small"
              value={this.props.inputPrefix}
              onChange={(e) => this.props.onChange('inputPrefix', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Suffix</div>
          <div className="value">
            <Input size="small"
              value={this.props.inputSuffix}
              onChange={(e) => this.props.onChange('inputSuffix', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Size</div>
          <div className="value">
            <Select size="small" value={this.props.inputSize} onChange={(v) => this.props.onChange('inputSize', v)} >
                <Option value="lg" key="1">large</Option>
                <Option value="nm" key="2">Normal</Option>
                <Option value="sm" key="3">Small</Option>
            </Select>
          </div>
        </div>
      </div>
    );
  }
}
InputAttributeGroup.attributeKeys = [
  'inputPlaceholder', 'inputPrefix', 'inputSuffix', 'inputSize'
]