import PiecePattern from './piecePattern'

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
  deletePattern(index) {
    let piece = pageEditor.getPiece(this.tag);
    piece.deletePattern(index);
  }
  selectPattern(index) {

  }
  updatePatterns(patterns) {
    patterns = patterns || this.state.patterns;
    this.setState({
      patterns: patterns
    })
  }
  updateHeight(height) {
    height = height || this.state.height;
    this.setState({
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
            return (
              <PiecePattern
                key={i} style={patternStyle} selected={p.selected} index={i}
                onAddPattern={(position) => this.handleChangePatternBarState(i + (position == 'top' ? 0 : 1))}
                onDeletePattern={() => this.deletePattern(i)}
              />)
          })
        }
      </div>
    );
  }
}
BasePiece.defaultProps = {
  
}