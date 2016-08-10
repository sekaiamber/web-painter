let React = require('react');

require('./toolbar.scss');

export default class Toolbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <div id="toolbar">
      </div>
    );
  }
}
