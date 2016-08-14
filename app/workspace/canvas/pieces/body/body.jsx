import BasePiece from './../basePiece'
let React = require('react');

export default class BodyPiece extends BasePiece {
  constructor(props) {
    super(props);
    this.tag = 'body'
  }
}