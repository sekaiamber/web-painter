let React = require('react');

require('./elementSelectedBorder.scss');

export default class ElementSelectedBorder extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    let style = this.props;
    return (
      <div className="element-selected-border" style={style}>
      </div>
    );
  }
}
ElementSelectedBorder.defaultProps = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  opacity: 0,
}