import $ from 'jquery'
import PagePiece from './pagePiece'
import Project from './../project/project'

var ResizeSensor = require('css-element-queries/src/ResizeSensor');

class PageInfo {
  constructor() {
    this.screenWidth = 1440;
    this.screenHeight = 900;
    this.pageHeight = this.screenHeight;
    this.pageWidth = this.screenWidth;
  }
}

export default class PageEditor {
  constructor() {
    this.$page = null;
    this.$iframe = null;
    this.pieces = [];
    this.init();
  }

  // init
  init() {
    this.initEvent();
    this.initProject();
    this.initPage();
  }

  initEvent() {
    exEventEmitter.on('elementComponentSelected', (elementComponent) => {
      this.currentSelectComponent = elementComponent;
    });
    exEventEmitter.on('uiready', () => {
      this.project.init();
    });
    exEventEmitter.on('updateBodyPieceRender', () => {
      let piece = this.getPiece('body');
      piece.updateRender();
    });
    exEventEmitter.on('updatePainter', (painter) => {
      this.painter = painter;
    });
    exEventEmitter.on('handlePaint', (attributeHandler) => {
      let color = this.painter[this.painter.ground];
      attributeHandler.setAttribute(this.painter.ground == 'background' ? 'backgroundColor' : 'color', color);
    });
  }

  initProject() {
    this.project = new Project(this);
  }

  initPage() {
    this.pageInfo = new PageInfo();
  }

  updatePageDom(pageContainer) {
    // this.$page = $(pageContainer);
    if (!this.$page) {
      let $container = $(pageContainer);
      let $styles = $(document).find('head link[rel=stylesheet], head style').clone();
      let $iframe = $('<iframe frameborder="0" scrolling="no"></iframe>');
      $container.append($iframe);
      $iframe.contents().find("head").append($styles);
      $iframe.contents().find("html").css('height', 'auto')
      this.$iframe = $iframe;
      let $page = $('<div id="page"></div>');
      $iframe.contents().find("body").append($page);
      this.$page = $page;
      exEventEmitter.on('zoomChange', (zoom) => {
        this.$iframe.css('transform', `scale(${zoom})`);
      });
      ResizeSensor(this.$page, () => {
        let height = this.$page.outerHeight();
        this.$iframe.css('height', height);
        this.pageInfo.pageHeight = height;
        exEventEmitter.emit('pageHeightDidChange', height);
        for (var i = 0; i < this.pieces.length; i++) {
          this.pieces[i].updateRender();
        }
      })
    }

  }

  // piece control

  addPiece(pieceReactComponent) {
    let piece = new PagePiece(pieceReactComponent, this);
    this.$page.append(piece.$piece);
    this.pieces.push(piece);
    piece.updateRender();
  }

  getPiece(tag) {
    let res = this.pieces.find((p) => {
      return p.component.tag == tag
    });
    return res;
  }
}