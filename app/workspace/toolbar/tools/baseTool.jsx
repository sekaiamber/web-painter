let React = require('react');

export default class BaseTool extends React.Component{
  constructor(props) {
    super(props);
    this.tag = ''
    this.icon = ''
    this.state = {
      active: false
    }

    // bind
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  handleClick(e) {
    if (this.state.active) {
      return;
    }
    this.setState({
      active: true
    });
  }
  render() {
    return (
      <div className={"tool " + this.tag}>
        <div className={"iconfont toolbar " + this.tag + (this.state.active ? ' active' : '') } onClick={this.handleClick}></div>
      </div>
    );
  }
}
