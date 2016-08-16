import $ from 'jquery'
import PagePattern from './pagePattern'

require('./pagePiece.scss');

export default class PagePiece {
  constructor(pieceReactComponent) {
    this.tag = 'piece';
    this.component = pieceReactComponent;
    this.patterns = [];
    this.init();
  }

  init() {
    exEventEmitter.on('cancelSelectd', () => {
      for (var i = 0; i < this.patterns.length; i++) {
        var pattern = this.patterns[i];
        pattern.selected = false;
      };
      this.updateRender();
    });
  }

  updatePageDom(page) {
    if (!page) return;
    this.$page = $(page);
    if ($(`.pe-piece.${this.component.tag}`, this.$page).length > 0) {
      return;
    } else {
      let $piece = $(`<div class="pe-piece ${this.component.tag}"></div>`);
      this.$piece = $piece;
      this.$page.append($piece);
      this.updateRender();
      console.log(`[page editor]: add ${this.component.tag} piece`);
    }
  }

  addPattern(patternReactComponent, index) {
    exEventEmitter.emit('cancelSelectd');
    let patterns = this.patterns;
    if (patterns.length == 0) {
      // empty的情况
      if (index > 0) return;
      let pattern = new PagePattern(patternReactComponent, this, 0);
      this.patterns.push(pattern);
      this.$piece.append(pattern.$pattern);
    } else {
      // 插入的情况
      if (patterns.length < index) return;
      let pattern = new PagePattern(patternReactComponent, this, index);
      if (index == patterns.length) {
        // 直接放到末尾
        patterns.push(pattern);
        this.$piece.append(pattern.$pattern);
      } else {
        // 插入到当前这个index前面
        patterns[index].$pattern.before(pattern.$pattern);
        patterns.splice(index, 0, pattern);
      }
    }
    this.updateRender()
    this.component.handleChangePatternBarState(index);
    console.log(`[page editor][${this.component.tag} piece]: add ${patternReactComponent.tag} pattern at position ${index}`);
  }

  deletePattern(index) {
    exEventEmitter.emit('cancelSelectd');
    let patterns = this.patterns;
    if (index >= patterns.length) return;
    let pattern = patterns[index];
    pattern.$pattern.remove();
    patterns.splice(index, 1);
    this.updateRender();
  }

  selectPattern(pagePatternIndex, pagePattern) {
    exEventEmitter.emit('cancelSelectd');
    exEventEmitter.emit('modeChange', 'select');
    for (var i = 0; i < this.patterns.length; i++) {
      var pattern = this.patterns[i];
      pattern.selected = false;
    };
    if (pagePatternIndex > -1 && pagePattern) {
      pagePattern.selected = true;
    }
    this.updateRender();
    exEventEmitter.emit('selectSomething', pagePattern);
  }

  // update
  updateRender() {
    this.updatePatternInfo();
    this.updatePatterns();
    this.updateHeight();
  }

  updatePatternInfo() {
    for (var i = 0; i < this.patterns.length; i++) {
      var pattern = this.patterns[i];
      pattern.index = i;
    }
  }

  updatePatterns() {
    let patterns = this.patterns.map((p) => {
      return p.getInfo();
    })
    if (patterns.length == 0) {
      this.$piece.addClass('empty');
    } else {
      this.$piece.removeClass('empty');
    }
    this.component.updatePatterns(patterns);
  }

  updateHeight() {
    this.component.updateHeight(this.$piece.outerHeight());
  }
}