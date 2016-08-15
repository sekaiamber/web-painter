let React = require('react');

import Pattern from './../../pattern'

export default class OnePiecePattern extends Pattern {
  constructor(props) {
    super(props);
  }
  renderSample() {
    return (
      <div className="one-piece pattern-element" style={{
        position: 'absolute',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 'calc(100% - 40px)',
        height: 'calc(100% - 40px)',
        top: 20,
        left: 20
      }}></div>
    )
  }
}
OnePiecePattern.patternTag = 'one-piece';