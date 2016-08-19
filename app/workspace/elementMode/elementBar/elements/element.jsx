let React = require('react');

require('./element.scss');

export default class Element extends React.Component{
  constructor(props) {
    super(props);
    this.tag = '';
    // bind
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.props.selected) {
      exEventEmitter.emit('elementComponentSelected', this);
    }
  }
  componentWillUnmount() {
  }
  handleClick() {
    this.props.onSelect();
    exEventEmitter.emit('elementComponentSelected', this);
  }
  render() {
    let classes = "element" + (this.props.selected ? " selected" : "");
    return (
      <div className={classes} onClick={this.handleClick}>
        {this.renderSample()}
      </div>
    );
  }
}
Element.defaultProps = {
  selected: false,
  onSelect: () => {}
}