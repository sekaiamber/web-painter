import PatternGroups from './patternGroups/groups'

let React = require('react');

require('./patternBar.scss');

export default class PatternBar extends React.Component{
  constructor(props) {
    super(props);
    let groups = PatternGroups.map((g) => {
      return new g()
    });
    this.state = {
      patternGroups: groups,
      currentGroupIndex: 0,
      currentGroup: groups[0]
    }

    // bind
    this.handleChangeGroup = this.handleChangeGroup.bind(this);
  }
  componentDidMount() {
    this.handleChangeGroup(0);
  }
  componentWillUnmount() {
  }
  handleChangeGroup(i) {
    if (i == this.state.currentGroupIndex) return;
    this.setState({
      currentGroupIndex: i,
      currentGroup: this.state.patternGroups[i]
    });
  }
  render() {
    return (
      <div id="patternBar">
        <div className="group-names">
          {this.state.patternGroups.map((pg, i) => {
            let classes = "group-name" + (i == this.state.currentGroupIndex ? " active" : "");
            return <span className={classes} key={i} onClick={() => this.handleChangeGroup(i)}>{pg.name}</span>
          }
          )}
        </div>
        <div className="pattern-samples">
          <div className="samples-list">
            {this.state.currentGroup.patterns.map((p, i) => {
              let P = p;
              return <P key={i} piece={this.props.piece} index={this.props.index}/> 
            })}
          </div>
        </div>
      </div>
    );
  }
}
