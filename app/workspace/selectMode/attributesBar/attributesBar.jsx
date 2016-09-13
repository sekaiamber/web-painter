import BasicInfoAttributeGroup from './attributeGroups/basicInfo'
let React = require('react');

require('./attributesBar.scss');

export default class AttributesBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      handler: null,
      data: null,
    }
    // bind
    this.setAttributeToTarget = this.setAttributeToTarget.bind(this);
  }
  componentDidMount() {
    exEventEmitter.on('cancelSelectd', () => {
      this.setState({
        handler: null,
        data: null
      });
    });
    exEventEmitter.on('selectSomething', (handler) => {
      this.setState({
        handler: handler,
      }, () => {
        this.readAttributeFromTarget()
      });
    });
    exEventEmitter.on('updateAttributeBar', () => {
      this.readAttributeFromTarget();
    })
  }
  setAttributeToTarget(key, value, callback) {
    let kvs;
    if (typeof key == 'string') {
      kvs = {};
      kvs[key] = value;
    } else {
      kvs = key;
      callback = value;
    }
    callback = callback || (() => {});
    let data = this.state.data;
    Object.keys(kvs).map((k) => {
      data[k] = kvs[k];
    })
    this.setState({
      data: data
    }, () => {
      this.state.handler.setAttribute(kvs);
      this.state.handler.updateRender();
      this.readAttributeFromTarget();
      callback();
    });
  }
  readAttributeFromTarget() {
    if (!this.state.handler) return;
    let data = this.state.handler.getAttributeObject();
    this.setState({
      data: data
    });
  }
  componentWillUnmount(){
  }
  render() {
    if (!this.state.handler) return (<div id="attributesBar" className="empty">Nothing Selected</div>)
    return (
      <div id="attributesBar">
        <div className="title">{this.state.handler.tag}</div>
        <BasicInfoAttributeGroup {...this.state.data} onChange={this.setAttributeToTarget} />
        {this.state.handler.attributeGroups.map((P, i) => {
          return <P {...this.state.data} onChange={this.setAttributeToTarget} key={i}/>
        })}
      </div>
    );
  }
}
