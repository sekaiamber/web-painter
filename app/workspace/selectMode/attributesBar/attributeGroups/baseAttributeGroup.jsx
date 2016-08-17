import { Input } from 'antd';
let React = require('react');

export default class BaseAttributeGroup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    throw new Error('This is a abstract component class.')
  }
}
BaseAttributeGroup = {
  target: null
}