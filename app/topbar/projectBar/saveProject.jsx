import { Select, Input, Button } from 'antd';
const Option = Select.Option;

import Mask from './../../utils/component/mask/mask'

let React = require('react');

export default class SaveProject extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <Mask>
        <h3>Save</h3>
        <div className="prop">
          Do you want to save this project?
        </div>
        <div className="opt">
          <Button type="primary" className="left" onClick={this.props.onCancel}>Cancel</Button>
          <Button type="primary" className="right" onClick={this.props.onSave}>Save</Button>
          <Button type="primary" className="right" onClick={this.props.onDtSave}>Don't Save</Button>
        </div>
      </Mask>
    );
  }
}