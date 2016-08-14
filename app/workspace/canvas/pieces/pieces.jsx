import HeaderPiece from './header/header'
import BodyPiece from './body/body'
import FooterPiece from './footer/footer'

let React = require('react');
require('./pieces.scss');

export default class Pieces extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    // bind
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    let styles = {
      width: this.props.width * this.props.zoom,
      height: this.props.height * this.props.zoom,
      top: this.props.top,
      left: this.props.left,
    }
    return (
      <div id="pieces" style={styles}>
        <HeaderPiece />
        <BodyPiece />
        <FooterPiece />
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