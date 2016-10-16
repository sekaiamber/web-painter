import { Input, Button, Modal, Icon, Switch, Select } from 'antd';
const Option = Select.Option;
import BaseAttributeGroup from './baseAttributeGroup'
const BaseAttributeGroupName = BaseAttributeGroup.BaseAttributeGroupName;
import _ from 'lodash'
let React = require('react');

require('./linklistData.scss');

const defaultLinkListItem = {
  text: 'Link',
  index: -1,
  href: '',
  target: '',
  linkself: false
}

class LinkListModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: _.cloneDeep(this.props.data) || [],
      visible: false,
      add: _.cloneDeep(defaultLinkListItem)
    }

    // bind
    this.handleOK = this.handleOK.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  open(data) {
    this.setState({
      data: _.cloneDeep(this.props.data) || [],
      visible: true,
      add: _.cloneDeep(defaultLinkListItem)
    });
  }
  handleOK() {
    this.setState({
      visible: false
    }, () => {
      this.props.onOk(this.state.data);
    })
  }
  handleCancel() {
    this.setState({
      data: _.cloneDeep(this.props.data) || [],
      visible: false
    })
  }
  handleChange(index, key, value) {
    let data = this.state.data;
    data[index][key] = value;
    this.setState({
      data: data
    })
  }
  handleDelete(index) {
    let data = this.state.data;
    data.splice(index, 1);
    this.setState({
      data: data
    });
  }
  handleChangeNew(key, value) {
    let data = this.state.add;
    data[key] = value;
    this.setState({
      add: data
    })
  }
  handleNew() {
    let data = this.state.data;
    data.push(this.state.add);
    this.setState({
      data: data,
      add: _.cloneDeep(defaultLinkListItem)
    })
  }
  render () {
    return (
      <Modal className="link-list-modal" visible={this.state.visible} onOk={this.handleOK} onCancel={this.handleCancel} title={this.props.title}>
        <div className="link-list-item">
          <div className="text" style={{display: 'inline-block'}}>Index</div>
          <div className="linkself" style={{display: 'inline-block'}}>URL/Page</div>
          <div className="href" style={{display: 'inline-block'}}>Target</div>
          <div className="target" style={{display: 'inline-block'}}>New tab</div>
          <div className="delete" style={{display: 'inline-block'}}>Delete</div>
        </div>
        {this.state.data.map((d, i) => {
          return (
            <div className="link-list-item" key={i}>
              <div className="text" style={{display: 'inline-block'}}>
                {d.index > -1 ? d.index + 1 : '新增'}
              </div>
              <div className="linkself" style={{display: 'inline-block'}}>
                <Switch  size="small" checked={d.linkself} onChange={(checked) => this.handleChange(i, 'linkself', checked)}/>
              </div>
              <div className="href" style={{display: 'inline-block'}}>
              {d.linkself ? (
                <Select size="small" value={d.href} onChange={(v) => this.handleChange(i, 'href', v)} >
                  {pageEditor.project.pages.map((p, i) => (
                    <Option value={p.name} key={i}>{p.name}</Option>
                  ))}
                </Select>
              ) : (
                <Input size="small" value={d.href} onChange={(e) => this.handleChange(i, 'href', e.target.value)}/>
              )}
              </div>
              <div className="target" style={{display: 'inline-block'}}>
                <Switch size="small" checked={d.target == '_blank'}  onChange={(checked) => this.handleChange(i, 'target', checked ? '_blank' : '')}/>
              </div>
              <div className="delete" style={{display: 'inline-block'}}>
                <Button size="small" onClick={() => this.handleDelete(i)}><Icon type="cross" /></Button>
              </div>
            </div>
          )
        })}
        <div className="link-list-item new">
          <div className="text" style={{display: 'inline-block'}}>
            新增：
          </div>
          <div className="linkself" style={{display: 'inline-block'}}>
            <Switch  size="small" checked={this.state.add.linkself} onChange={(checked) => this.handleChangeNew('linkself', checked)}/>
          </div>
          <div className="href" style={{display: 'inline-block'}}>
          {this.state.add.linkself ? (
            <Select size="small" value={this.state.add.href} onChange={(v) => this.handleChangeNew('href', v)} >
              {pageEditor.project.pages.map((p, i) => (
                <Option value={p.name} key={i}>{p.name}</Option>
              ))}
            </Select>
          ) : (
            <Input size="small" value={this.state.add.href} onChange={(e) => this.handleChangeNew('href', e.target.value)}/>
          )}
          </div>
          <div className="target" style={{display: 'inline-block'}}>
            <Switch size="small" checked={this.state.add.target == '_blank'}  onChange={(checked) => this.handleChangeNew('target', checked ? '_blank' : '')}/>
          </div>
          <div className="new" style={{display: 'inline-block'}}>
            <Button size="small" onClick={() => this.handleNew()}><Icon type="plus" /></Button>
          </div>
        </div>
      </Modal>
    )
  }
}


export default class LinkListDataAttributeGroup extends BaseAttributeGroup{
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
    this.props.onChange('linkListData', data);
  }
  render() {
    return (
      <div className={"attribute-group" + (this.state.slide ? " slide" : "")}>
        <BaseAttributeGroupName name="Data" slide={this.state.slide} onTriggerSlide={this.handleTriggerSlide}/>
        <div className="attribute">
          <div className="name">Links</div>
          <div className="value"><Button type="primary" size="small" onClick={() => this.modal.open(this.props.linkListData) }>Edit</Button>
            <LinkListModal ref={(c) => this.modal = c}
              title="Edit Linklist Data" 
              onOk={this.handleDataChange}
              data={this.props.linkListData}
            />
          </div>
        </div>
        <div className="attribute">
          <div className="name">Style</div>
          <div className="value">
            <Select size="small" value={this.props.linkListStyle} onChange={(v) => this.props.onChange('linkListStyle', v)} >
                <Option value="none" key="1">None</Option>
                <Option value="button" key="2">Button</Option>
            </Select>
          </div>
        </div>
      </div>
    );
  }
}
LinkListDataAttributeGroup.attributeKeys = [
  'linkListData', 'linkListStyle'
]