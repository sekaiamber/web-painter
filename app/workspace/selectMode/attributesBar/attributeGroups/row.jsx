import { Input, Radio, Select, Button, Switch, Slider } from 'antd';
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
  handleChangeWidth(index, width) {
    let widths = this.props.colWidths;
    widths[index] = width;
    this.props.onChange('colWidths', widths);
  }
  render() {
    return (
      <div className={"attribute-group" + (this.state.slide ? " slide" : "")} >
        <BaseAttributeGroupName name="Row" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Count</div>
          <div className="value">
            <Button size="small" type="primary" shape="circle" icon="plus"
              onClick={() => this.props.onChange('rowCount', this.props.rowCount + 1)}/>
            <Button size="small" type="primary" shape="circle" icon="minus"
              onClick={() => this.props.onChange('rowCount', this.props.rowCount - 1)}/>
          </div>
        </div>
        {this.props.colWidths.map((v, i) => 
        <div className="attribute" key={i}>
          <div className="name">Width {i + 1}</div>
          <div className="value">
            <Slider min={1} max={12} tipFormatter={(v) => `${v}/12`}
              value={v}
              onChange={(value) => this.handleChangeWidth(i, parseInt(value))}
            />
          </div>
        </div>
        )}
      </div>
    );
  }
}
RowAttributeGroup.attributeKeys = [
  'rowCount', 'colWidths'
]
RowAttributeGroup.defaultProps = {
  colWidths: []
}