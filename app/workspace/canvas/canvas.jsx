let React = require('react');

require('./canvas.scss');

export default class Canvas extends React.Component{
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
      <div id="canvas">
        <div id="window"></div>
      </div>
    );
  }
}
