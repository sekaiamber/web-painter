import { Input, Radio, Switch, Select } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class PanelAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  getAlignAttr(attr) {
    if (attr == 'start') {
      return 'left'
    }
    if (attr == 'end') {
      return 'right'
    }
    return attr;
  }
  render() {
    return (
      <div className={"attribute-group" + (this.state.slide ? " slide" : "")}>
        <BaseAttributeGroupName name="Panel" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Style</div>
          <div className="value">
            <Select size="small" value={this.props.panelStyle} onChange={(v) => this.props.onChange('panelStyle', v)} >
              <Option value="default" key="1">Default</Option>
              <Option value="primary" key="2">Primary</Option>
              <Option value="success" key="3">Success</Option>
              <Option value="info" key="4">Info</Option>
              <Option value="warning" key="5">Warning</Option>
              <Option value="danger" key="6">Danger</Option>
            </Select>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Heading</div>
          <div className="value">
            <Switch size="small" checked={this.props.panelHeading}  onChange={(checked) => this.props.onChange('panelHeading', checked)}/>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Footer</div>
          <div className="value">
            <Switch size="small" checked={this.props.panelFooter}  onChange={(checked) => this.props.onChange('panelFooter', checked)}/>
          </div>
        </div>
      </div>
    );
  }
}
PanelAttributeGroup.attributeKeys = [
  'panelHeading', 'panelStyle', 'panelFooter'
]