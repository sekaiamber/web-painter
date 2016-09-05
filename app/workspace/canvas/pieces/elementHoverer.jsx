let React = require('react');

require('./elementHoverer.scss');

export default class ElementHoverer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      border: {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        opacity: 0,
      }
    }
  }
  componentDidMount() {
    exEventEmitter.on('updateSelectModeHoverElement', (tag, left, top, width, height) => {
      if (tag != this.props.tag) return;
      if (this.state.left != left
        || this.state.top != top
        || this.state.width != width
        || this.state.height != height
      ) {
        this.setState({
          border: {
            left: left,
            top: top,
            width: width,
            height: height,
            opacity: 1
          }
        });
      }
    });

    exEventEmitter.on('updateElementModeHoverElement', (type, tag, left, top, width, height, position) => {
      if (tag != this.props.tag) return;
      if (type == 'replace') {
        // 替换的情况
      } else if (type == 'insert') {
        // 插入的情况
        if (position == 'bottom') {
          top = top + height - 2;
        }
        height = 2;
      }
      if (this.state.left != left
        || this.state.top != top
        || this.state.width != width
        || this.state.height != height
      ) {
        this.setState({
          border: {
            left: left,
            top: top,
            width: width,
            height: height,
            opacity: 1
          }
        });
      }
    });

    exEventEmitter.on('updateElementModeHoverElement', (type, tag, left, top, width, height, position) => {
      if (tag != this.props.tag) return;
      if (type == 'replace') {
        // 替换的情况
      } else if (type == 'insert') {
        // 插入的情况
        if (position == 'bottom') {
          top = top + height - 2;
        }
        height = 2;
      }
      if (this.state.left != left
        || this.state.top != top
        || this.state.width != width
        || this.state.height != height
      ) {
        this.setState({
          border: {
            left: left,
            top: top,
            width: width,
            height: height,
            opacity: 1
          }
        });
      }
    });

    exEventEmitter.on('cancelHoverElement', (tag) => {
      if (tag != this.props.tag) return;
      this.setState({
        border: {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          opacity: 0,
        }
      });
    })
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <div className="element-hoverer">
        <div className="hoverer" style={this.state.border}>
          <div className="text">Click To Add Here</div>
        </div>
      </div>
    );
  }
}
ElementHoverer.defaultProps = {
  tag: ''
}