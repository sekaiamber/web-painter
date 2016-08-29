import $ from 'jquery';
import {getPatternFrom$dom} from './utils'

export default class Page {
  constructor(name, project) {
    this.name = name;
    this.project = project;

    // html meta info
    this.fileName = '';
    this.title = '';
    this.keywords = '';
    this.description = '';

    // patterns
    this.patterns = [];

    // history
    this.history = [];
    this.currentHistoryIndex = -1;
  }

  getHtmlText() {
    let ret = '';
    // header
    ret += this.project.headerPiece.$piece[0].outerHTML;
    // body
    ret += `<div class="pe-piece body">`;
    for (var i = 0; i < this.patterns.length; i++) {
      ret += this.patterns[i].$pattern[0].outerHTML;
    }
    ret += '</div>'
    // footer
    ret += this.project.footerPiece.$piece[0].outerHTML;
    return ret;
  }

  // save project
  getMetaInfo() {
    let ret = {};
    ret.name = this.name;
    ret.fileName = this.fileName;
    ret.title = this.title;
    ret.keywords = this.keywords;
    ret.description = this.description;

    ret.patterns = this.patterns.map((p) => {
      return p.$pattern[0].outerHTML;
    });
    return ret;
  }

  importFromMetaInfo(info) {
    this.fileName = info.fileName;
    this.title = info.title;
    this.keywords = info.keywords;
    this.description = info.description;

    this.patterns = info.patterns.map((p, index) => {
      return getPatternFrom$dom($(p), this.project.bodyPiece, index);
    });
  }
}