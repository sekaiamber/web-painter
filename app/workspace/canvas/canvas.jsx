import Page from './page/page'

let React = require('react');
let $ = require('jquery');

require('./canvas.scss');

export default class Canvas extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      width: 1440,
      height: 900,
      zoom: 1
    }
  }
  componentDidMount() {
    exEventEmitter.on('zoomChange', (zoom) => {
      this.setState({
        zoom: zoom
      })
    })
  }
  componentWillUnmount(){
  }
  render() {
    let windowStyle = {
      width: this.state.width,
      height: this.state.height,
      zoom: this.state.zoom,
      padding: `${Math.round(this.state.height / this.state.zoom / 2)}px ${Math.round(this.state.width / this.state.zoom / 2)}px`
    }
    return (
      <div id="canvas" style={windowStyle} >
        <Page width={this.state.width} height={this.state.height}/>
      </div>
    );
  }
}
