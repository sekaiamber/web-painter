let React = require('react');

require('./patternBar.scss');

export default class PatternBar extends React.Component{
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
      <div id="patternBar">
      </div>
    );
  }
}
