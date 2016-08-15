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
    this.addPattern = this.addPattern.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  addPattern (index) {
    exEventEmitter.emit('addPattern', this, index);
  }
  render() {
    return (
      <div className={"piece " + this.tag}>
        {this.state.patterns.length == 0 ?
          <div className="empty" onClick={() => this.addPattern(0)}></div> :
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