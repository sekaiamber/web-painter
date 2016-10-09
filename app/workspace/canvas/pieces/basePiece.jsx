import PiecePattern from './piecePattern'
import ElementHoverer from './elementHoverer'
import ElementSelectedBorder from './elementSelectedBorder'

let React = require('react');

require('./basePiece.scss');

export default class BasePiece extends React.Component{
  constructor(props) {
    super(props);
    this.tag = ''
    this.state = {
      patterns: [],
      height: 0,
      elementBorderStyle: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        opacity: 0,
      },
      elementHandler: null
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
  updateElementSelectedBorder(style, handler) {
    style = style || this.state.elementBorderStyle;
    handler = handler || null;
    let origin = this.state.elementBorderStyle;
    Object.keys(style).map((k) => {
      origin[k] = style[k];
    });
    this.setState({
      elementBorderStyle: origin,
      elementHandler: handler
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
        <ElementHoverer tag={this.tag} />
        <ElementSelectedBorder {...this.state.elementBorderStyle} handler={this.state.elementHandler}/>
      </div>
    );
  }
}
BasePiece.defaultProps = {
  
}