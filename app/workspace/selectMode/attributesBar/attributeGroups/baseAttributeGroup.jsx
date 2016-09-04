import { Input, Icon } from 'antd';
let React = require('react');

class BaseAttributeGroupName extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="group-name">
        {this.props.name}
        <div className="slide-bt" onClick={() => {this.props.onTriggerSlide(!this.props.slide)}}><Icon type="down" /></div>
      </div>
    )
  }
}
BaseAttributeGroupName.defaultProps = {
  name: ''
}

export default class BaseAttributeGroup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      slide: false
    };

    // bind
    this.handleTriggerSlide = this.handleTriggerSlide.bind(this);
  }
  componentDidMount() {}
  componentWillUnmount() {}
  handleTriggerSlide(slide) {
    this.setState({
      slide: slide
    });
  }
  render() {
    throw new Error('This is a abstract component class.')
  }
}
BaseAttributeGroup.defaultProps = {
  target: null
}
BaseAttributeGroup.BaseAttributeGroupName = BaseAttributeGroupName;
