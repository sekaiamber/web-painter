import BasePiece from './../basePiece'
let React = require('react');

export default class HeaderPiece extends BasePiece {
  constructor(props) {
    super(props);
    this.tag = 'header'
  }
}