let React = require('react');

require('./basePiece.scss');

export default class BasePiece extends React.Component{
  constructor(props) {
    super(props);
    this.tag = ''
    this.state = {
      patterns: []
    }
    // bind
    this.handleChangePatternBarState = this.handleChangePatternBarState.bind(this);
    this.addPattern = this.addPattern.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  handleChangePatternBarState (index) {
    exEventEmitter.emit('changePatternBarState', this, index);
  }
  addPattern(pattern, index) {
    console.log(`[${this.tag} piece]: add ${pattern.tag} pattern into position ${index}`);
    console.log(pageEditor);
  }
  render() {
    let classes = "piece " + this.tag + (this.props.active ? " active" : "");
    return (
      <div className={classes}>
        {this.state.patterns.length == 0 ?
          <div className="empty" onClick={() => this.handleChangePatternBarState(0)}></div> :
          this.state.patterns.map((p, i) => 
            <div className="pattern"></div>
          )
        }
      </div>
    );
  }
}
BasePiece.defaultProps = {
  
}