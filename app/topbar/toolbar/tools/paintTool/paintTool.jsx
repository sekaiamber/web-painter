import BaseTool from './../baseTool'
let React = require('react');

export default class PaintTool extends BaseTool {
  constructor(props) {
    super(props);
    this.tag = 'paint'
  }
}