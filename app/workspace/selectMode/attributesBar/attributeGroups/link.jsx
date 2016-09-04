import { Input, Button, Modal, Icon, Switch, Select } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
import _ from 'lodash'
let React = require('react');

export default class LinkAttributeGroup extends BaseAttributeGroup{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  handleChange(key, value) {
    let data = this.props.link;
    data[key] = value;
    this.props.onChange('link', data);
  }
  render() {
    if (this.props.link) {
      return (
        <div className={"attribute-group" + (this.state.slide ? " slide" : "")}>
          <BaseAttributeGroupName name="Link" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
          <div className="attribute">
            <div className="name">Text</div>
            <div className="value">
              <Input size="small" value={this.props.link.text} onChange={(e) => this.handleChange('text', e.target.value)}/>
            </div>
          </div>
          <div className="attribute">
            <div className="name">URL/Page</div>
            <div className="value">
              <Switch  size="small" checked={this.props.link.linkself} onChange={(checked) => this.handleChange('linkself', checked)}/>
            </div>
          </div>
          <div className="attribute">
            <div className="name">Target</div>
            <div className="value">
            {this.props.link.linkself ? (
              <Select size="small" value={this.props.link.href} onChange={(v) => this.handleChange('href', v)} >
                {pageEditor.project.pages.map((p, i) => (
                  <Option value={p.name} key={i}>{p.name}</Option>
                ))}
              </Select>
            ) : (
              <Input size="small" value={this.props.link.href} onChange={(e) => this.handleChange('href', e.target.value)}/>
            )}
            </div>
          </div>
          <div className="attribute">
            <div className="name">New tab</div>
            <div className="value">
              <Switch size="small" checked={this.props.link.target == '_blank'}  onChange={(checked) => this.handleChange('target', checked ? '_blank' : '')}/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="attribute-group">
          <div className="group-name">Link</div>
        </div>
      )
    }
  }
}
LinkAttributeGroup.attributeKeys = [
  'link'
]
