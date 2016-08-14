let React = require('react');

require('./basePiece.scss');

export default class BasePiece extends React.Component{
  constructor(props) {
    super(props);
    this.tag = ''
    this.state = {
      patterns: []
    }
    // bind
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <div className={"piece " + this.tag}>
        {this.state.patterns.length == 0 ?
          <div className="empty"></div> :
          this.state.patterns.map((p, i) => 
            <div className="pattern"></div>
          )
        }
      </div>
    );
  }
}
BasePiece.defaultProps = {
  
}