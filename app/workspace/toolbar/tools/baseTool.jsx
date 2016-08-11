let React = require('react');

// require('./baseTool.scss');

export default class BaseTool extends React.Component{
  constructor(props) {
    super(props);
    this.tag = ''
    this.state = {}
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <div className={"tool " + this.tag}>
        
      </div>
    );
  }
}
