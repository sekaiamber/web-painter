let React = require('react');

require('./attributesBar.scss');

export default class AttributesBar extends React.Component{
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
      <div id="attributesBar">
      </div>
    );
  }
}
