import BaseTool from './../baseTool'
let React = require('react');

export default class TextTool extends BaseTool {
  constructor(props) {
    super(props);
    this.tag = 'text'
  }
}