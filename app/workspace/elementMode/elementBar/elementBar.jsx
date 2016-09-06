let React = require('react');

require('./elementBar.scss');

import Elements from './elements/elements'

let favElements = [Elements[0], Elements[6]]

export default class ElementBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      favElements: favElements,
      allElements: Elements,
      selectElementIndex: 0,
      selectElement: {tag: ''},
      showall: false,
    }
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  handleSelectElement(element, i) {
    this.setState({
      selectElementIndex: i,
      selectElement: element
    });
    exEventEmitter.emit('elementComponentSelected', element);
  }
  handleChangeElement(element, i) {
    let favElements = this.state.favElements;
    favElements[this.state.selectElementIndex] = this.state.allElements[i];
    this.setState({
      favElements: favElements,
      selectElement: element
    });
    exEventEmitter.emit('elementComponentSelected', element);
  }
  render() {
    return (
      <div id="elementBar" className={this.state.showall ? "slide-up" : ""}>
        <div className="container">
          <div className="fav-elements">
            {this.state.favElements.map((E, i) =>
              <E key={i}
                selected={i == this.state.selectElementIndex}
                onSelect={(element) => {this.handleSelectElement(element, i)}}
              />
            )}
          </div>
          <div className="all-elements">
            {this.state.allElements.map((E, i) =>
              <E key={i}
                selected={this.state.selectElement.tag == E.elementTag}
                onSelect={(element) => {this.handleChangeElement(element, i)}}
              />
            )}
          </div>
        </div>
        <div className="slide-up-bt" onClick={() => this.setState({showall: true})}><div className="iconfont element add"></div></div>
        <div className="slide-down-bt" onClick={() => this.setState({showall: false})}><div className="iconfont element cross"></div></div>
      </div>
    );
  }
}
ElementBar.defaultProps = {
}