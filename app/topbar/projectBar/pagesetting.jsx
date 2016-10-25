import { Select, Input, Button } from 'antd';
const Option = Select.Option;

import Mask from './../../utils/component/mask/mask'

let React = require('react');

export default class PageSetting extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fileName: '',
      keywords: '',
      description: '',
      title: ''
    }
    // bind
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePageInfo = this.handleChangePageInfo.bind(this);
  }
  componentDidMount() {
    let page = pageEditor.project.currentPage;
    this.setState({
      name: page.name,
      fileName: page.fileName,
      keywords: page.keywords,
      description: page.description,
      title: page.title
    })
  }
  componentWillUnmount(){
  }
  handleChange(key, value) {
    let state = {};
    state[key] = value;
    this.setState(state);
  }
  handleChangePageInfo() {
    pageEditor.project.updatePageInfo(this.state.name, {
      fileName: this.state.fileName,
      keywords: this.state.keywords,
      description: this.state.description,
      title: this.state.title
    })
    this.props.onCancel();
  }
  render() {
    return (
      <Mask>
        <h3>Page Setting</h3>
        <div className="prop">
          <div className="prop-name">Name</div>
          <div className="prop-value">
            <Input size="small" disabled value={this.state.name} onChange={(e) => this.handleChange('name', e.target.value)}/>
          </div>
        </div>
        <div className="prop">
          <div className="prop-name">File</div>
          <div className="prop-value">
            <Input size="small" value={this.state.fileName} onChange={(e) => this.handleChange('fileName', e.target.value)}/>
          </div>
        </div>
        <div className="prop">
          <div className="prop-name">Title</div>
          <div className="prop-value">
            <Input size="small" value={this.state.title} onChange={(e) => this.handleChange('title', e.target.value)}/>
          </div>
        </div>
        <div className="prop">
          <div className="prop-name">Keywords</div>
          <div className="prop-value">
            <Input size="small" value={this.state.keywords} onChange={(e) => this.handleChange('keywords', e.target.value)}/>
          </div>
        </div>
        <div className="prop">
          <div className="prop-name">Description</div>
          <div className="prop-value">
            <Input size="small" value={this.state.description} onChange={(e) => this.handleChange('description', e.target.value)}/>
          </div>
        </div>
        <div className="opt">
          <Button type="primary" className="left" onClick={this.props.onCancel}>Cancel</Button>
          <Button type="primary" className="right" onClick={this.handleChangePageInfo}>Done</Button>
        </div>
      </Mask>
    );
  }
}
PageSetting.default = {
  onCancel: () => {},
}