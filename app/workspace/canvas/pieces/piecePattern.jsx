import {Icon} from 'antd'

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
    this.handleDeletePattern = this.handleDeletePattern.bind(this);
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
  handleAddPattern(position) {
    this.props.onAddPattern(position);
  }
  handleDeletePattern() {
    this.props.onDeletePattern();
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
            onClick={() => {this.handleAddPattern('top')}}
          ><Icon type="plus-circle-o" /></div>
          <div className="bottom add-bt"
            onMouseEnter={() => {this.handleAddMouseEnterAndLeave('bottom', true)}}
            onMouseLeave={() => {this.handleAddMouseEnterAndLeave('bottom', false)}}
            onClick={() => {this.handleAddPattern('bottom')}}
          ><Icon type="plus-circle-o" /></div>
          <div className={bottomAddLineClasses}></div>
          <div className="delete-bt" onClick={this.handleDeletePattern}><Icon type="cross-circle-o" /></div>
        </div>
      </div>
    );
  }
}
PiecePattern.defaultProps = {
  selected: false,
  index: -1,
  onAddPattern: () => {},
  onDeletePattern: () => {}
}