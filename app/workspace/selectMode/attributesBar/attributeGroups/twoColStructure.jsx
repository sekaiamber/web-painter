import { Input, Slider } from 'antd';
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
import _ from 'lodash'
let React = require('react');

export default class TwoColStructureAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);

    // bind
    this.handleDataChange = this.handleDataChange.bind(this);
  }
  componentDidMount() {
    
  }
  componentWillUnmount(){
  }
  handleDataChange(data) {
    this.props.onChange('twoColStructureDividePosition', data);
  }
  render() {
    return (
      <div className={"attribute-group" + (this.state.slide ? " slide" : "")}>
        <BaseAttributeGroupName name="Divide" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Position</div>
          <div className="value">
            <Slider min={10} max={90} tipFormatter={(v) => `${v}%`}
              value={this.props.twoColStructureDividePosition * 100}
              onChange={(value) => this.props.onChange('twoColStructureDividePosition', value / 100)}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Width</div>
          <div className="value">
            <Input size="small" value={this.props.twoColStructureDivideWidth} addonAfter="px"
              onChange={(e) => this.props.onChange('twoColStructureDivideWidth', parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
    );
  }
}
TwoColStructureAttributeGroup.attributeKeys = [
  'twoColStructureDividePosition', 'twoColStructureDivideWidth'
]
TwoColStructureAttributeGroup.defaultProps = {
  twoColStructureDividePosition: 0
}