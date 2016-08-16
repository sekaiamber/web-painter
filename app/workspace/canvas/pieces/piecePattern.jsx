let classnames = require('classnames');
let React = require('react');
require('./piecePattern.scss');

export default class PiecePattern extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      topAddLineShow: false,
      bottomAddLineShow: false,
    }
    // bind
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  handleAddMouseEnterAndLeave(position, show) {
    let state = {};
    state[position + "AddLineShow"] = show;
    this.setState(state);
  }
  render() {
    let topAddLineClasses = classnames("top add-line", { show: this.state.topAddLineShow });
    let bottomAddLineClasses = classnames("bottom add-line", { show: this.state.bottomAddLineShow });
    let borderClasses = classnames("pattern-border", { show: this.props.selected });
    return (
      <div className="pattern" style={this.props.style}>
        <div className={borderClasses}>
          <div className={topAddLineClasses}></div>
          <div className="top add-bt"
            onMouseEnter={() => {this.handleAddMouseEnterAndLeave('top', true)}}
            onMouseLeave={() => {this.handleAddMouseEnterAndLeave('top', false)}}
          ></div>
          <div className="bottom add-bt"
            onMouseEnter={() => {this.handleAddMouseEnterAndLeave('bottom', true)}}
            onMouseLeave={() => {this.handleAddMouseEnterAndLeave('bottom', false)}}
          ></div>
          <div className={bottomAddLineClasses}></div>
          <div className="delete-bt"></div>
        </div>
      </div>
    );
  }
}
PiecePattern.defaultProps = {
  selected: false
}