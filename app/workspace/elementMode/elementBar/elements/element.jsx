let React = require('react');

require('./element.scss');

export default class Element extends React.Component{
  constructor(props) {
    super(props);
    this.tag = '';
    // bind
    this.handleClick = this.handleClick.bind(this);
  }
  domDidAdd() {}
  componentDidMount() {
    if (this.props.selected) {
      this.props.onSelect(this);
    }
  }
  componentWillUnmount() {
  }
  handleClick() {
    this.props.onSelect(this);
  }
  render() {
    let classes = "iconfont element " + this.tag + (this.props.selected ? " selected" : "");
    return (
      <div className={classes} onClick={this.handleClick}>
      </div>
    );
  }
}
Element.defaultProps = {
  selected: false,
  onSelect: () => {}
}