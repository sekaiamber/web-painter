import { Input } from 'antd';
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
let React = require('react');

export default class BasicInfoAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <div className="attribute-group">
        <div className="attribute">
          <div className="name">ID</div>
          <div className="value">
            <Input size="small"
              value={this.props.id}
              onChange={(e) => this.props.onChange('id', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Class</div>
          <div className="value">
            <Input size="small"
              value={this.props.class}
              onChange={(e) => this.props.onChange('class', e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}