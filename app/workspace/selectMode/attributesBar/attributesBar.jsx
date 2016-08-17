import BasicInfoAttributeGroup from './attributeGroups/basicInfo'
import AppearanceAttributeGroup from './attributeGroups/appearance'
let React = require('react');

require('./attributesBar.scss');

export default class AttributesBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      target: null,
      renderer: null,
      data: null,
    }
    // bind
    this.setAttributeToTarget = this.setAttributeToTarget.bind(this);
  }
  componentDidMount() {
    exEventEmitter.on('cancelSelectd', () => {
      this.setState({
        target: null,
        renderer: null,
        data: null
      });
    });
    exEventEmitter.on('selectSomething', (target, renderer) => {
      this.setState({
        target: target,
        renderer: renderer,
      }, () => {
        this.readAttributeFromTarget()
      });
    });
  }
  setAttributeToTarget(key, value, callback) {
    let data = this.state.data;
    data[key] = value;
    this.setState({
      data: data
    }, () => {
      this.state.target.setAttribute(key, this.state.data[key]);
      this.state.renderer.updateRender();
    }, callback)
  }
  readAttributeFromTarget() {
    if (!this.state.target) return;
    let data = this.state.target.getAttributeObject();
    this.setState({
      data: data
    });
  }
  componentWillUnmount(){
  }
  render() {
    if (!this.state.target) return (<div id="attributesBar" className="empty">Nothing Selected</div>)
    return (
      <div id="attributesBar">
        <div className="title">{this.state.target.tag}</div>
        <BasicInfoAttributeGroup {...this.state.data} onChange={this.setAttributeToTarget} />
        {this.state.target.attributeGroups.map((P, i) => {
          return <P {...this.state.data} onChange={this.setAttributeToTarget} key={i}/>
        })}
      </div>
    );
  }
}
