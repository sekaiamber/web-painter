let React = require('react');

require('./mask.scss')

export default class Mask extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <div className="wp-mask">
        <div className="page">
          {this.props.children}
        </div>
      </div>
    );
  }
}