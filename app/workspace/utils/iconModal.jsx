import {Modal, Tabs, Input, Button, Icon} from 'antd'
const TabPane = Tabs.TabPane;
// import presetAssets from './presetAssets'
const ipc = require('electron').ipcRenderer;

let React = require('react');

require('./iconModal.scss');

// icons
const icon_etline = require('./icons/et-line.json');

class IconsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

  }
  componentDidMount() {

  }
  handleClick(tag) {
    this.props.onChose(tag);
  }
  render () {
    return (
      <div className="icon-list">
        {this.props.data.map((icon, i) => 
          <div className={icon.tag} key={i} onClick={() => this.handleClick(icon.tag)}>
          </div>
        )}
      </div>
    )
  }
}


export default class IconModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      etlines: icon_etline
    }

    // bind
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  handleCancel() {
    this.props.onCancel()
  }
  handleChose(type, tag) {
    this.props.onChose(type, tag);
  }
  render () {
    return (
      <Modal className="icon-modal"
        visible={this.props.visible}
        onCancel={this.handleCancel}
        title="Asset Manager" footer={undefined}
      >
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab="ET Line" key="1">
            <IconsContainer data={this.state.etlines} onChose={(tag) => this.handleChose('et-line', tag)} />
          </TabPane>
        </Tabs>
      </Modal>
    )
  }
}