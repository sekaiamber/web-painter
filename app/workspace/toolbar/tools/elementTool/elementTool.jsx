import BaseTool from './../baseTool'
let React = require('react');

export default class ElementTool extends BaseTool {
  constructor(props) {
    super(props);
    this.tag = 'element'
  }
}