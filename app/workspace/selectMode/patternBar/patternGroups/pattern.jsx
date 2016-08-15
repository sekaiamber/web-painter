let React = require('react');

require('./pattern.scss');

export default class Pattern extends React.Component{
  constructor(props) {
    super(props);
    // bind
    this.renderSample = this.renderSample.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  renderSample() {
    return undefined;
  }
  render() {
    return (
      <div className="pattern">
        {this.renderSample()}
      </div>
    );
  }
}

export class PatternGroup {
  constructor(name, patterns) {
    this.name = name || '';
    this.patterns = patterns || []
  }
}