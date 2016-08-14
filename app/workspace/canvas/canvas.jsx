import Page from './page/page'

let React = require('react');
let $ = require('jquery');

require('./canvas.scss');

export default class Canvas extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: 1440,
      screenHeight: 900,
      pageWidth: 1440,
      pageHeight: 900,
      zoom: 1
    }

    // binding
    this.autofix = this.autofix.bind(this);
  }
  componentDidMount() {
    exEventEmitter.on('zoomChange', (zoom) => {
      this.setState({
        zoom: zoom
      })
    });
    this.autofix();
  }
  componentWillUnmount(){
  }
  autofix() {
    let winWidth = $('#workspace').width();
    let winHeight = $('#workspace').height();
    winWidth *= 0.8;
    winHeight *= 0.8;
    let zoom = Math.min(winWidth / this.state.screenWidth, winHeight / this.state.screenHeight);
    zoom = parseFloat(zoom.toFixed(2));
    if (zoom > 1) {
      zoom = 1;
    }
    exEventEmitter.emit('zoomChange', zoom);
  }
  render() {
    let windowStyle = {
      width: this.state.screenWidth * this.state.zoom,
      height: this.state.screenHeight * this.state.zoom,
      paddingTop: `${Math.round(this.state.pageHeight / 2)}px`,
      paddingRight: `${Math.round(this.state.pageWidth / 2)}px`,
      paddingBottom: `${Math.round(this.state.pageHeight / 2)}px`,
      paddingLeft: `${Math.round(this.state.pageWidth / 2)}px`,
    }
    let screenStyle = {
      width: this.state.screenWidth,
      height: this.state.screenHeight,
      top: windowStyle.paddingTop,
      left: windowStyle.paddingLeft
    }
    return (
      <div id="canvas">
        <div className="page-container" style={windowStyle} >
          <div className="screen-border" style={screenStyle}></div>
          <Page width={this.state.pageWidth} height={this.state.pageHeight} zoom={this.state.zoom}/>
        </div>
      </div>
    );
  }
}
