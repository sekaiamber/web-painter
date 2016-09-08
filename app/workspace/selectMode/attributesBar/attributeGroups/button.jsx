import { Input, Button, Icon, Switch, Select, Slider } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
import _ from 'lodash'
let React = require('react');

export default class ButtonAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
    _.merge(this.state, {
      currentSelect: null,
      modalVisible: false
    });

  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className={"attribute-group" + (this.state.slide ? " slide" : "")}>
        <BaseAttributeGroupName name="Button" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Size</div>
          <div className="value">
            <Select size="small" value={this.props.buttonSize} onChange={(v) => this.props.onChange('buttonSize', v)} >
                <Option value="lg" key="1">large</Option>
                <Option value="nm" key="2">Normal</Option>
                <Option value="sm" key="3">Small</Option>
                <Option value="xs" key="3">Tiny</Option>
            </Select>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Fill</div>
          <div className="value">
            <Switch  size="small" checked={this.props.buttonFill} onChange={(checked) => this.props.onChange('buttonFill', checked)}/>
          </div>
        </div>
        <div className="attribute">
          <div className="name">Count</div>
          <div className="value">
            <Button size="small" type="primary" shape="circle" icon="plus"
              onClick={() => this.props.onChange('buttonCount', this.props.buttonCount + 1)}/>
            <Button size="small" type="primary" shape="circle" icon="minus"
              onClick={() => this.props.onChange('buttonCount', this.props.buttonCount - 1)}/>
          </div>
        </div>
      </div>
    );
  }
}
ButtonAttributeGroup.attributeKeys = [
  'buttonCount', 'buttonSize', 'buttonFill'
]
ButtonAttributeGroup.defaultProps = {
  buttonCount: 0
}
