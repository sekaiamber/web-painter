let React = require('react');

require('./pattern.scss');

export default class Pattern extends React.Component{
  constructor(props) {
    super(props);
    // bind
    this.renderSample = this.renderSample.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  renderSample() {
    return undefined;
  }
  handleClick(e) {
    this.props.piece.addPattern(this, this.props.index);
  }
  render() {
    return (
      <div className="pattern" onClick={this.handleClick}>
        {this.renderSample()}
      </div>
    );
  }
}
Pattern.defaultProps = {
  piece: null,
  index: -1
}

export class PatternGroup {
  constructor(name, patterns) {
    this.name = name || '';
    this.patterns = patterns || []
  }
}