import $ from 'jquery'
import PagePattern from './pagePattern'

require('./pagePiece.scss');

// public vars

let currentHoverElement = null;
let currentHoverType = '';
let currentHoverPosition = '';


export default class PagePiece {
  constructor(pieceReactComponent, page) {
    this.tag = 'piece';
    this.component = pieceReactComponent;
    this.pageEditor = page;
    this.$page = page.$page;
    this.patterns = [];
    this.$piece = this.initDom(pieceReactComponent);
  }

  // init
  initDom(pieceReactComponent) {
    let $piece = null;
    if ($(`.pe-piece.${pieceReactComponent.tag}`, this.$page).length > 0) {
      throw new Error(`[page editor]: already have ${pieceReactComponent.tag} piece`);
    } else {
      $piece = $(`<div class="pe-piece ${pieceReactComponent.tag}"></div>`);
      console.log(`[page editor]: add ${pieceReactComponent.tag} piece`);
    }
    $piece = this.initClick($piece);
    $piece = this.initHover($piece);
    $piece = this.initMousemove($piece);
    this.initEvent();
    return $piece;
  }

  initClick($piece) {
    // element mode: add element
    $piece.click((e) => {
      if (window._mode_ == 'element') {
        if (e.target == currentHoverElement) {
          this.addElement(e.target);
        }
      }
    })
    
    return $piece;
  }

  initHover($piece) {
    $piece.hover((e) => {
      console.log('in');
    }, (e) => {
      exEventEmitter.emit('cancelHoverElement', this.component.tag);
    });
    return $piece;
  }

  initMousemove($piece) {
    // element mode: hover something
    $piece.mousemove((e) => {
      let $target = $(e.target);
      if (
        window._mode_ == 'element'
        && e.target != e.currentTarget
        && !$target.hasClass('pe-pattern')
      ) {
        let p1 = $piece.offset();
        let p2 = $target.offset();
        let dp = {
          top: p2.top - p1.top,
          left: p2.left - p1.left
        }
        if ($target.attr('wp-raw') == "") {
          if (currentHoverElement == e.target) return;
          currentHoverElement = e.target;
          // replace
          exEventEmitter.emit('updateHoverElement',
            'replace',
            this.component.tag,
            parseInt((p2.left - p1.left) * window._zoom_),
            parseInt((p2.top - p1.top) * window._zoom_),
            parseInt($target.outerWidth() * window._zoom_),
            parseInt($target.outerHeight() * window._zoom_)
          )
        } else {
          // insert
          let realHalfHeight = $target.outerHeight() * window._zoom_ / 2;
          let position = realHalfHeight > e.offsetY ? "top" : "bottom";
          if (currentHoverElement == e.target && currentHoverPosition == position) return;
          currentHoverElement = e.target;
          exEventEmitter.emit('updateHoverElement',
            'insert',
            this.component.tag,
            parseInt((p2.left - p1.left) * window._zoom_),
            parseInt((p2.top - p1.top) * window._zoom_),
            parseInt($target.outerWidth() * window._zoom_),
            parseInt($target.outerHeight() * window._zoom_),
            position
          )
        }
        
      } else {
        exEventEmitter.emit('cancelHoverElement', this.component.tag);
      }
    });
    return $piece;
  }

  initEvent() {
    exEventEmitter.on('cancelSelectd', () => {
      for (var i = 0; i < this.patterns.length; i++) {
        var pattern = this.patterns[i];
        pattern.selected = false;
      };
      this.updateRender();
    });
    exEventEmitter.on('cancelHoverElement', () => {
      currentHoverElement = null;
      currentHoverType = '';
      currentHoverPosition = '';
    });
    exEventEmitter.on('updateHoverElement', (type, tag, left, top, width, height, position) => {
      currentHoverType = type;
      currentHoverPosition = position;
    });
  }

  // element control
  addElement(target) {
    let elementComponent = this.pageEditor.currentSelectComponent;
    if (currentHoverType == 'replace') {
      // replace
      let $target = $(target);
      let $element = $(elementComponent.getPlainHtmlText());
      $target.after($element);
      $target.remove();
      exEventEmitter.emit('cancelHoverElement', this.component.tag);
    } else if (currentHoverType == 'insert') {
      // insert
      let $target = $(target);
      let $element = $(elementComponent.getPlainHtmlText());
      if (currentHoverPosition == 'top') {
        $target.before($element);
      } else if (currentHoverPosition == 'bottom') {
        $target.after($element);
      }
      exEventEmitter.emit('cancelHoverElement', this.component.tag);
    }
    this.updateRender();
    console.log(`[page editor][${this.component.tag} piece]: add ${elementComponent.tag} element`);
  }

  // pattern control

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
    exEventEmitter.emit('selectSomething', pagePattern, this);
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