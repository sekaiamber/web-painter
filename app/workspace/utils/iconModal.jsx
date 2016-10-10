import {Modal, Tabs, Input, Button, Icon} from 'antd'
const TabPane = Tabs.TabPane;

let React = require('react');

require('./iconModal.scss');

// icons
const icon_etline = require('./icons/et-line.json');
const icon_feathre = require('./icons/feather.json');
const icon_fontawesome = require('./icons/fontawesome.json');
const icon_ionicons = require('./icons/ionicons.json');
const icon_linecons = require('./icons/linecons.json');

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
      etlines: icon_etline,
      feather: icon_feathre,
      fontawesome: icon_fontawesome,
      ionicons: icon_ionicons,
      linecons: icon_linecons
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
        title="Icon Manager" footer={undefined}
      >
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab="ET Line" key="1">
            <IconsContainer data={this.state.etlines} onChose={(tag) => this.handleChose('et-line', tag)} />
          </TabPane>
          <TabPane tab="Feathre" key="2">
            <IconsContainer data={this.state.feather} onChose={(tag) => this.handleChose('feather', tag)} />
          </TabPane>
          <TabPane tab="Font Awesome" key="3">
            <IconsContainer data={this.state.fontawesome} onChose={(tag) => this.handleChose('fontawesome', tag)} />
          </TabPane>
          <TabPane tab="Ion Icons" key="4">
            <IconsContainer data={this.state.ionicons} onChose={(tag) => this.handleChose('ionicons', tag)} />
          </TabPane>
          <TabPane tab="Line Icons" key="5">
            <IconsContainer data={this.state.linecons} onChose={(tag) => this.handleChose('linecons', tag)} />
          </TabPane>
        </Tabs>
      </Modal>
    )
  }
}