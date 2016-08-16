let React = require('react');

require('./attributesBar.scss');

export default class AttributesBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      target: null
    }
  }
  componentDidMount() {
    exEventEmitter.on('cancelSelectd', () => {
      this.setState({
        target: null
      });
    });
    exEventEmitter.on('selectSomething', (target) => {
      this.setState({
        target: target
      });
    });
  }
  componentWillUnmount(){
  }
  render() {
    if (!this.state.target) return (<div id="attributesBar" className="empty">Nothing Selected</div>)
    return (
      <div id="attributesBar">
        <div className="title">{this.state.target.tag}</div>
      </div>
    );
  }
}
