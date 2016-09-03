import {Modal, Tabs, Input, Button, Icon} from 'antd'
const TabPane = Tabs.TabPane;
import presetAssets from './presetAssets'
const ipc = require('electron').ipcRenderer;

let React = require('react');

require('./assetModal.scss');

class ImagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

    // bind
    this.handleAddProjectAssetImage = this.handleAddProjectAssetImage.bind(this);
  }
  componentDidMount() {

  }
  handleClick(key, src) {
    this.props.onChose(key, src);
  }
  handleAddProjectAssetImage() {
    let filepath = ipc.sendSync('open-file-dialog-sync', 'Select A Asset', [
      {name: 'Images', extensions: ['jpg', 'png']}
    ]);
    if (!filepath) return;
    filepath = filepath[0];
    pageEditor.project.assets.addAsset(
      `${Date.now()}_${parseInt(Math.random() * 1000)}.png`,
      filepath,
      'path'
    );
  }
  render () {
    return (
      <div className="image-list">
        {Object.keys(this.props.data).map((key, i) => 
          <div className="image-border" key={i} onClick={() => this.handleClick(key, this.props.data[key])}>
            <img src={this.props.data[key]} />
          </div>
        )}
        {this.props.hasAddBt ? 
          <div className="image-border add" onClick={this.handleAddProjectAssetImage}>
            <Icon type="plus-circle-o" />
          </div>
          : undefined}
      </div>
    )
  }
}

// 这儿使用单例模式
let currentModal = null;
let projectAssetsDidUpdate = () => {
  // 如果是unmount状态的话就返回不处理
  if (!currentModal._isMount) return;
  let projectAssets = {};
  let originData = pageEditor.project.assets.data;
  Object.keys(originData).map((name) => {
    projectAssets[name] = originData[name].data;
  });
  currentModal.setState({
    project: projectAssets
  })
}

export default class AssetModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      preset: presetAssets,
      project: {}
    }

    // bind
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentDidMount() {
    if (currentModal == null) {
      exEventEmitter.on('projectAssetsDidUpdate', () => {
        projectAssetsDidUpdate();
      });
    }
    this._isMount = true;
    // init
    currentModal = this;
    projectAssetsDidUpdate();
  }
  componentWillUnmount() {
    this._isMount = false;
  }
  handleCancel() {
    this.props.onCancel()
  }
  handleChose(type, target, src) {
    this.props.onChose(type, target, src);
  }
  render () {
    return (
      <Modal className="asset-modal"
        visible={this.props.visible}
        onOk={this.handleOK} onCancel={this.handleCancel}
        title="Asset Manager" footer={undefined}
      >
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab="Preset" key="1">
            <ImagesContainer data={this.state.preset} onChose={(target, src) => this.handleChose('preset', target, src)} />
          </TabPane>
          <TabPane tab="Project Asset" key="2">
            <ImagesContainer data={this.state.project} onChose={(target, src) => this.handleChose('project', target, src)} hasAddBt/>
          </TabPane>
          <TabPane tab="Network Image" key="3">
            <div>Enter the image's URL:</div>
            <div style={{display: 'inline-block', width: 250, verticalAlign: 'middle', marginRight: 10}}>
              <Input addonBefore="http://" size="small" value={this.state.input} onChange={(e) => this.setState({input: e.target.value})}/>
            </div>
            <Button size="small" onClick={() => this.handleChose('url', '', 'http://' + this.state.input)}>OK</Button>
          </TabPane>
        </Tabs>
      </Modal>
    )
  }
}