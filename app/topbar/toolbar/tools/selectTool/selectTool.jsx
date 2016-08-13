import BaseTool from './../baseTool'
let React = require('react');

export default class SelectTool extends BaseTool {
  constructor(props) {
    super(props);
    this.tag = 'select'
  }
}