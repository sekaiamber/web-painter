import { Select, Input, Button } from 'antd';
const Option = Select.Option;

let React = require('react');

export default class NewPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      disabled: true
    }
    // bind
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  handleChange(e) {
    let v = e.target.value;
    this.setState({
      name: v,
      disabled: !(v.trim().length > 0)
    })
  }
  render() {
    return (
      <div className="mask">
        <div className="page">
          <h3>Create New Page</h3>
          <div className="prop">
            <div className="prop-name">Name</div>
            <div className="prop-value">
              <Input size="small" value={this.state.name} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="opt">
            <Button type="primary" className="cancel" onClick={this.props.onCancel}>Cancel</Button>
            <Button type="primary" className="ok" disabled={this.state.disabled} onClick={() => this.props.onCreate(this.state.name.trim())}>Create</Button>
          </div>
        </div>
      </div>
    );
  }
}
NewPage.default = {
  onCancel: () => {},
  onCreate: () => {}
}