import { Input } from 'antd';
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');

export default class ContentAttributeGroup extends BaseAttributeGroup{
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
        <BaseAttributeGroupName name="Content" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute" style={{height: 'auto'}}>
          <Input type="textarea" rows={4}
            value={this.props.textContent}
            onChange={(e) => this.props.onChange('textContent', e.target.value)}
          />
        </div>
      </div>
    );
  }
}
ContentAttributeGroup.attributeKeys = [
  'textContent'
]