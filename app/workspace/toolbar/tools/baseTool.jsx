let React = require('react');

export default class BaseTool extends React.Component{
  constructor(props) {
    super(props);
    this.tag = ''
    this.icon = ''
    this.state = {}
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <div className={"tool " + this.tag}>
        <div className={"iconfont toolbar " + this.tag }></div>
      </div>
    );
  }
}
