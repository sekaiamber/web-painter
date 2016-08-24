import Toolbar from './toolbar/toolbar'
import DivideLine from './divideLine/divideLine'
import Scaler from './scaler/scaler'
import ProjectBar from './projectBar/projectBar'

let React = require('react');

require('./topbar.scss');

export default class Topbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <div id="topbar">
        <Toolbar />
        <DivideLine />
        <Scaler />
        <ProjectBar />
      </div>
    );
  }
}
