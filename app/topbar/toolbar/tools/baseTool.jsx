let React = require('react');

require('./baseTool.scss');

export default class BaseTool extends React.Component{
  constructor(props) {
    super(props);
    this.tag = ''
    this.icon = ''
    this.state = {
    }
    // bind
    this.handleClick = this.handleClick.bind(this);
    this.subtool = this.subtool.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  handleClick(e) {
    if (this.props.active) {
      return;
    }
    this.props.onActive(this.tag);
  }
  subtool() {
    return (undefined)
  }
  render() {
    return (
      <div className={"tool " + this.tag}>
        <div className={"iconfont toolbar topbar " + this.tag + "-mode" + (this.props.active ? ' active' : '') } onClick={this.handleClick}></div>
      </div>
    );
  }
}
BaseTool.defaultProps = {
  active: false,
  onActive: () => {}
}