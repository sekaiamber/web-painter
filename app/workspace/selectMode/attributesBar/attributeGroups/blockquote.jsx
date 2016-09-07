import { Input, Radio } from 'antd';
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class BlockquoteAttributeGroup extends BaseAttributeGroup{
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
        <BaseAttributeGroupName name="Blockquote" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Align</div>
          <div className="value">
            <RadioGroup size="small"
              onChange={(e) => this.props.onChange('blockquoteAlign', e.target.value)}
              defaultValue={this.getAlignAttr(this.props.blockquoteAlign)}
              value={this.getAlignAttr(this.props.blockquoteAlign)}>
              <RadioButton value="left"><span className="iconfont attribute textalignleft"></span></RadioButton>
              <RadioButton value="right"><span className="iconfont attribute textalignright"></span></RadioButton>
            </RadioGroup>
          </div>
        </div>
      </div>
    );
  }
}
BlockquoteAttributeGroup.attributeKeys = [
  'blockquoteAlign'
]