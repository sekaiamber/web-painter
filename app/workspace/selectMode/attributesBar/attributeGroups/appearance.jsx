import { Input } from 'antd';
import BaseAttributeGroup from './baseAttributeGroup'
let React = require('react');

export default class AppearanceAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="attribute-group">
        <div className="group-name">Appearance</div>
        <div className="attribute">
          <div className="name">Padding</div>
          <div className="value">
            <Input size="small"
              value={this.props.padding}
              onChange={(e) => this.props.onChange('padding', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Margin</div>
          <div className="value">
            <Input size="small"
              value={this.props.margin}
              onChange={(e) => this.props.onChange('margin', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Width</div>
          <div className="value">
            <Input size="small"
              value={this.props.width}
              onChange={(e) => this.props.onChange('width', e.target.value)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Height</div>
          <div className="value">
            <Input size="small"
              value={this.props.height}
              onChange={(e) => this.props.onChange('height', e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}
AppearanceAttributeGroup.attributeKeys = [
  'padding', 'margin', 'width', 'height'
]