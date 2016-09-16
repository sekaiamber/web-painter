let React = require('react');

require('./page.scss');

export default class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    let style = {
      width: this.props.width,
      background: this.props.background
    }
    return (
      <div id="pageIFrameContainer" style={style} ref={(c) => pageEditor.updatePageDom(c) }>
      </div>
    );
  }
}
Page.defaultProps = {
  width: 1440,
  background: 'transparent',
}