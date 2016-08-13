let React = require('react');

require('./divideLine.scss');

export default class DivideLine extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <div className="divideline">
        <span></span>
      </div>
    );
  }
}