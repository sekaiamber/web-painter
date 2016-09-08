import { Input, Radio, Select, Button } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

require('./selector.scss')

export default class SelectorAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  handleOptionChange(i, key, value) {
    let opts = this.props.selectOptions;
    opts[i][key] = value;
    this.props.onChange('selectOptions', opts);
  }
  deleteOption(i) {
    let opts = this.props.selectOptions;
    opts.splice(i, 1);
    this.props.onChange('selectOptions', opts);
  }
  addOption() {
    let opts = this.props.selectOptions;
    opts.push({
      text: 'option',
      value: ''
    });
    this.props.onChange('selectOptions', opts);
  }
  render() {
    return (
      <div className={"attribute-group selector" + (this.state.slide ? " slide" : "")} >
        <BaseAttributeGroupName name="Input" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        {this.props.selectOptions.map((o, i) => [
          <div key='0' className="option">Option {i + 1}
            <div className="iconfont element delete" onClick={(e) => this.deleteOption(i)}></div>
          </div>,
          <div key='1' className="attribute">
            <div className="name">Text</div>
            <div className="value">
              <Input size="small" value={o.text} onChange={(e) => this.handleOptionChange(i, 'text', e.target.value)}/>
            </div>
          </div>,
          <div key='2' className="attribute">
            <div className="name">Value</div>
            <div className="value">
              <Input size="small" value={o.value} onChange={(e) => this.handleOptionChange(i, 'value', e.target.value)}/>
            </div>
          </div>
        ])}
        <div style={{textAlign: 'center'}}>
          <Button size="small" type="primary" icon="plus" onClick={(e) => this.addOption()} />
        </div>
      </div>
    );
  }
}
SelectorAttributeGroup.attributeKeys = [
  'selectOptions'
]
SelectorAttributeGroup.defaultProps = {
  selectOptions: []
}