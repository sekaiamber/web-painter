let React = require('react');

require('./basePiece.scss');

export default class BasePiece extends React.Component{
  constructor(props) {
    super(props);
    this.tag = ''
    this.state = {
      patterns: [],
      height: 0,
    }
    // bind
    this.handleChangePatternBarState = this.handleChangePatternBarState.bind(this);
    this.addPattern = this.addPattern.bind(this);
  }
  componentDidMount() {
    pageEditor.addPiece(this);
    exEventEmitter.on('afterZoomChange', (zoom) => {
      this.updateHeight();
    });
  }
  componentWillUnmount(){
  }
  handleChangePatternBarState (index) {
    exEventEmitter.emit('changePatternBarState', this, index);
  }
  addPattern(pattern, index) {
    console.log(`[${this.tag} piece]: add ${pattern.tag} pattern into position ${index}`);
    let piece = pageEditor.getPiece(this.tag);
    piece.addPattern(pattern, index);
  }
  updateHeight(height, patterns) {
    if (typeof height == 'object') {
      patterns = height;
      height = null;
    }
    height = height || this.state.height;
    patterns = patterns || this.state.patterns;
    this.setState({
      patterns: patterns,
      height: height
    })
  }
  render() {
    let classes = "piece " + this.tag + (this.props.active ? " active" : "") + (this.state.patterns.length == 0 ? " empty" : "");
    let pieceStyle = {
      height: this.state.height * window._zoom_
    }
    return (
      <div className={classes} style={pieceStyle}>
        {this.state.patterns.length == 0 ?
          <div className="empty" onClick={() => this.handleChangePatternBarState(0)}></div> :
          this.state.patterns.map((p, i) => {
            let patternStyle = {
              height: p.height * window._zoom_
            }
            return <div className="pattern" key={i} style={patternStyle}></div>
          })
        }
      </div>
    );
  }
}
BasePiece.defaultProps = {
  
}