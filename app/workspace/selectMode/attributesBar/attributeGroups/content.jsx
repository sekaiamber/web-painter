import { Input } from 'antd';
import BaseAttributeGroup from './baseAttributeGroup'
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
      <div className="attribute-group">
        <div className="group-name">Content</div>
        <div className="attribute" style={{height: 'auto'}}>
          <Input type="textarea" rows={4}
            value={this.props.text}
            onChange={(e) => this.props.onChange('text', e.target.value)}
          />
        </div>
      </div>
    );
  }
}
ContentAttributeGroup.attributeKeys = [
  'text'
]