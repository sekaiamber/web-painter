import BaseTool from './../baseTool'
let React = require('react');

export default class ElementTool extends BaseTool {
  constructor(props) {
    super(props);
    this.tag = 'element'
  }

  subtool() {
    return (
      <div className="subtools">
        <span className="subtool active">框架</span>
        <span className="subtool">图片</span>
        <span className="subtool">表格</span>
        <span className="subtool">无序列表</span>
        <span className="subtool">有序列表</span>
      </div>
    )
  }
}