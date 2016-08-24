import { Select, Input, Button } from 'antd'
import NewPage from './newpage'
import PageSetting from './pagesetting'

const Option = Select.Option;

let React = require('react');

require('./projectBar.scss');

export default class ProjectBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPage: '',
      activeNewPage: false,
      activePageSetting: false
    }
    // bind
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleAddPage = this.handleAddPage.bind(this);
    this.handleSettingPage = this.handleSettingPage.bind(this);
    this.handleCancelAll = this.handleCancelAll.bind(this);
    this.handleCreateNewPage = this.handleCreateNewPage.bind(this);
  }
  componentDidMount() {
    exEventEmitter.on('projectPageInfoChange', (project) => {
      let pages = project.pages.map((p) => p.name);
      this.setState({
        pages: pages
      });
    });
    exEventEmitter.on('selectProjectPage', (name) => {
      this.setState({
        currentPage: name
      });
    });
  }
  componentWillUnmount(){
  }
  handleAddPage() {
    this.setState({
      activeNewPage: true,
      activePageSetting: false,
    })
  }
  handleSettingPage() {
    this.setState({
      activeNewPage: false,
      activePageSetting: true,
    })
  }
  handleCancelAll() {
    this.setState({
      activeNewPage: false,
      activePageSetting: false,
    })
  }
  handleCreateNewPage(name) {
    exEventEmitter.emit('createProjectPage', name);
    this.handleCancelAll();
  }
  handleChangePage(name) {
    if (name == this.state.currentPage) return;
    exEventEmitter.emit('selectProjectPage', name);
  }
  render() {
    return (
      <div id="projectBar">
        <div className="tool">
          <div className="iconfont toolbar topbar addpage" onClick={this.handleAddPage}></div>
        </div>

        <div className="tool">
          <div className="iconfont toolbar topbar pagesetting" onClick={this.handleSettingPage}></div>
        </div>

        <div className="pageSelect">
          <Select size="small"
            value={this.state.currentPage}
            style={{ width: 150 }}
            onChange={this.handleChangePage}
            getPopupContainer={() => document.getElementById('projectBar')}
          >
            {this.state.pages.map((p, i) => <Option value={p} key={i}>{p}</Option>)}
          </Select>
        </div>
        {this.state.activeNewPage ? <NewPage onCancel={this.handleCancelAll} onCreate={this.handleCreateNewPage} /> : undefined}
        {this.state.activePageSetting ? <PageSetting onCancel={this.handleCancelAll} /> : undefined}
      </div>
    );
  }
}