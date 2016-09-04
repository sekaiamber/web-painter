import { Input, Radio } from 'antd';
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class TypeAttributeGroup extends BaseAttributeGroup{
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
        <BaseAttributeGroupName name="Type Setting" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Size</div>
          <div className="value">
            <Input size="small"
              value={this.props.fontSize}
              onChange={(e) => this.props.onChange('fontSize', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Height</div>
          <div className="value">
            <Input size="small"
              value={this.props.lineHeight}
              onChange={(e) => this.props.onChange('lineHeight', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Align</div>
          <div className="value">
            <RadioGroup size="small"
              onChange={(e) => this.props.onChange('textAlign', e.target.value)}
              defaultValue={this.getAlignAttr(this.props.textAlign)}
              value={this.getAlignAttr(this.props.textAlign)}>
              <RadioButton value="left"><span className="iconfont attribute textalignleft"></span></RadioButton>
              <RadioButton value="center"><span className="iconfont attribute textaligncenter"></span></RadioButton>
              <RadioButton value="right"><span className="iconfont attribute textalignright"></span></RadioButton>
              <RadioButton value="justify"><span className="iconfont attribute textalignjustify"></span></RadioButton>
            </RadioGroup>
          </div>
        </div>
      </div>
    );
  }
}
TypeAttributeGroup.attributeKeys = [
  'fontSize', 'lineHeight', 'textAlign'
]