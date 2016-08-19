let React = require('react');

require('./elementBar.scss');

import Elements from './elements/elements'

export default class ElementBar extends React.Component{
  constructor(props) {
    super(props);
    let favElements = []
    for (var i = 0; i < 8 && i < Elements.length; i++) {
      favElements.push(Elements[i]);
    }
    this.state = {
      favElements: favElements,
      allElements: Elements,
      selectElementIndex: 0,
    }
    // bind
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  handleSelect(i) {
    this.setState({
      selectElementIndex: i
    });
  }
  render() {
    return (
      <div id="elementBar">
        <div className="container">
          <div className="fav-elements">
            {this.state.favElements.map((E, i) =>
              <E key={i}
                selected={i == this.state.selectElementIndex}
                onSelect={() => {this.handleSelect(i)}}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
ElementBar.defaultProps = {
}