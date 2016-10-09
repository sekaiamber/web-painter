let React = require('react');

require('./elementSelectedBorder.scss');

export default class ElementSelectedBorder extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}

    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  handleDelete() {
    if (this.props.handler) {
      this.props.handler.delete();
    }
  }
  render() {
    let style = this.props;
    return (
      <div className="element-selected-border" style={style}>
        <div className="element-selected-opt-list">
          <div className="iconfont element delete element-selected-opt" onClick={this.handleDelete}></div>
        </div>
      </div>
    );
  }
}
ElementSelectedBorder.defaultProps = {
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
}