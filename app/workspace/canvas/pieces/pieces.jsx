import HeaderPiece from './header/header'
import BodyPiece from './body/body'
import FooterPiece from './footer/footer'

let React = require('react');
require('./pieces.scss');

export default class Pieces extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      header_active: false,
      body_active: false,
      footer_active: false
    }
    // bind
  }
  componentDidMount() {
    exEventEmitter.on('changePatternBarState', (piece, index) => {
      let state = {
        header_active: false,
        body_active: false,
        footer_active: false
      }
      if (!this.state[piece.tag + '_active']) {
        // 再次按下时关闭
        state[piece.tag + '_active'] = true;
      }
      this.setState(state);
    });
  }
  componentWillUnmount(){
  }
  render() {
    let styles = {
      width: this.props.width * this.props.zoom,
      minHeight: this.props.height * this.props.zoom,
      top: this.props.top,
      left: this.props.left,
    }
    return (
      <div id="pieces" style={styles}>
        <HeaderPiece active={this.state.header_active}/>
        <BodyPiece active={this.state.body_active}/>
        <FooterPiece active={this.state.footer_active}/>
      </div>
    );
  }
}
Pieces.defaultProps = {
  width: 1440,
  height: 900,
  zoom: 1,
  top: 0,
  left: 0,
}