import $ from 'jquery'
import PagePattern from './pagePattern'
import { PatternAttributeHandler, ElementAttributeHandler } from './attributeHandler'

require('./pagePiece._noprocess_.scss');

// public vars

let elementMode_currentHoverElement = null;
let elementMode_currentHoverType = '';
let elementMode_currentHoverPosition = '';
let selectMode_currentHoverElement = null;
let selectMode_currentSelectEvent = null;


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
      if (window._mode_ == 'select') {
        let $target = $(e.target);
        if ($target.attr('wp-pattern')) {
          // select pattern
          let pagePatternIndex = parseInt($target.attr('wp-pattern-index'));
          this.selectPattern(pagePatternIndex);
        } else {
          // select element not raw element
          if ($target.attr('wp-raw') == undefined) {
            this.selectElement(e);
          }
        }
        if ($target.attr('wp-no-bubble') != undefined) {
          e.stopPropagation();
        }
      }
      if (window._mode_ == 'element') {
        if (e.target == elementMode_currentHoverElement) {
          this.addElement(e.target);
        }
      }
    })
    $piece.contextmenu((e) => {
      e.preventDefault();
      if (window._mode_ == 'select') {
        let $target = $(e.target);
        if ($target.attr('wp-pattern')) {
          // select pattern
          let pagePatternIndex = parseInt($target.attr('wp-pattern-index'));
          this.selectPattern(pagePatternIndex);
          this.contextMenuPattern(pagePatternIndex);
        } else {
          // select element
          this.selectElement(e);
          this.contextMenuElement(e);
        }
        if ($target.attr('wp-no-bubble') != undefined) {
          e.stopPropagation();
        }
      }
      if (window._mode_ == 'element') {
        // if (e.target == elementMode_currentHoverElement) {
        //   this.addElement(e.target);
        // }
      }
    })
    
    return $piece;
  }

  initHover($piece) {
    $piece.hover((e) => {
      
    }, (e) => {
      exEventEmitter.emit('cancelHoverElement', this.component.tag);
    });
    return $piece;
  }

  initMousemove($piece) {
    $piece.mousemove((e) => {
      let $target = $(e.target);
      if (
        window._mode_ == 'select'        // select模式下hover非piece本身也非当前选中元素
        && e.target != e.currentTarget
      ) {
        if (selectMode_currentHoverElement == e.target) return;
        if ($target.attr('wp-raw') != undefined) return;
        selectMode_currentHoverElement = e.target;
        let p1 = $piece.offset();
        let p2 = $target.offset();
        exEventEmitter.emit('updateSelectModeHoverElement',
          this.component.tag,
          parseInt((p2.left - p1.left) * window._zoom_),
          parseInt((p2.top - p1.top) * window._zoom_),
          parseInt($target.outerWidth() * window._zoom_),
          parseInt($target.outerHeight() * window._zoom_)
        )
      } else if (
        window._mode_ == 'element'           // element模式下hover非pattern也非piece本身
        && e.target != e.currentTarget
        && !$target.hasClass('pe-pattern')
      ) {
        let p1 = $piece.offset();
        let p2 = $target.offset();
        if ($target.attr('wp-raw') == "") {
          if (elementMode_currentHoverElement == e.target) return;
          elementMode_currentHoverElement = e.target;
          // replace
          exEventEmitter.emit('updateElementModeHoverElement',
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
          let position = realHalfHeight + ($target[0].clientHeight == 0 ? $target[0].offsetTop : 0) > e.offsetY ? "top" : "bottom";
          if (elementMode_currentHoverElement == e.target && elementMode_currentHoverPosition == position) return;
          elementMode_currentHoverElement = e.target;
          exEventEmitter.emit('updateElementModeHoverElement',
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
      selectMode_currentSelectEvent = null;
      this.updateRender();
    });
    exEventEmitter.on('cancelHoverElement', () => {
      elementMode_currentHoverElement = null;
      elementMode_currentHoverType = '';
      elementMode_currentHoverPosition = '';
    });
    exEventEmitter.on('updateElementModeHoverElement', (type, tag, left, top, width, height, position) => {
      elementMode_currentHoverType = type;
      elementMode_currentHoverPosition = position;
    });
  }

  // element control
  addElement(target) {
    let elementComponent = this.pageEditor.currentSelectComponent;
    let $target = $(target);
    let $element = $(elementComponent.getPlainHtmlText());
    if (elementMode_currentHoverType == 'replace') {
      // replace
      $target.after($element);
      $target.detach();
    } else if (elementMode_currentHoverType == 'insert') {
      // insert
      if (elementMode_currentHoverPosition == 'top') {
        $target.before($element);
      } else if (elementMode_currentHoverPosition == 'bottom') {
        $target.after($element);
      }
    }
    elementComponent.domDidAdd($element);
    this.updateRender();
    // 历史记录
    if (this.component.tag == 'body') {
      if (elementMode_currentHoverType == 'replace') {
        exEventEmitter.emit('addHistory', 'add element', null, $element, () => {
          $element.first().before($target);
          $element.detach();
          this.cancelSelectHoverAll();
        }, () => {
          $target.after($element);
          $target.detach();
        })
      } else if (elementMode_currentHoverType == 'insert') {
        let redo;
        if (elementMode_currentHoverPosition == 'top') {
          redo = () => {
            $target.before($element);
          }
        } else if (elementMode_currentHoverPosition == 'bottom') {
          redo = () => {
            $target.after($element);
          }
        }
        exEventEmitter.emit('addHistory', 'add element', null, $element, () => {
          $element.detach();
          this.cancelSelectHoverAll();
        }, redo)
      }
    }
    exEventEmitter.emit('cancelHoverElement', this.component.tag);
    console.log(`[page editor][${this.component.tag} piece]: add ${elementComponent.tag} element`);
  }

  selectElement(e) {
    this.cancelSelectHoverAll();
    exEventEmitter.emit('modeChange', 'select');
    this.updateRender(e);
  }

  contextMenuElement(e) {
    exEventEmitter.emit('contextMenuElement', e);
  }

  // pattern control

  addPattern(patternReactComponent, index) {
    this.cancelSelectHoverAll();
    let pattern = new PagePattern(patternReactComponent.constructor, this, index);
    this._addPattern(pattern, index);
    // 历史记录
    if (this.component.tag == 'body') {
      exEventEmitter.emit('addHistory', 'add pattern', null, pattern, () => {
        this._deletePattern(index);
      }, () => {
        this._addPattern(pattern, index);
      })
    }
    this.component.handleChangePatternBarState(index);
    console.log(`[page editor][${this.component.tag} piece]: add ${patternReactComponent.tag} pattern at position ${index}`);
  }
  _addPattern(pattern, index) {
    let patterns = this.patterns;
    if (patterns.length == 0) {
      // empty的情况
      this.patterns.push(pattern);
      this.$piece.append(pattern.$pattern);
    } else {
      // 插入的情况
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
    // 如果是body piece则将patterns加入到当前页面数据中
    if (this.component.tag == 'body') {
      this.pageEditor.project.setCurrentPagePatterns(patterns);
    }
    this.updateRender()
  }

  deletePattern(index) {
    this.cancelSelectHoverAll();
    if (index >= this.patterns.length) return;
    let pattern = this._deletePattern(index);
    // 历史记录
    if (this.component.tag == 'body') {
      exEventEmitter.emit('addHistory', 'delete pattern', pattern, null, () => {
        this._addPattern(pattern, index);
      }, () => {
        this._deletePattern(index);
      })
    }
  }
  _deletePattern(index) {
    let patterns = this.patterns;
    let pattern = patterns[index];
    pattern.$pattern.detach();
    patterns.splice(index, 1);
    this.pageEditor.project.setCurrentPagePatterns(this.patterns);
    this.updateRender();
    this.cancelSelectHoverAll();
    return pattern;
  }

  selectPattern(index) {
    this.cancelSelectHoverAll();
    exEventEmitter.emit('modeChange', 'select');
    let pagePattern = this.patterns[index];
    pagePattern.selected = true;
    this.updateRender();
    exEventEmitter.emit('selectSomething', new PatternAttributeHandler(pagePattern, this));
  }

  contextMenuPattern(index) {
    exEventEmitter.emit('contextMenuPattern', index);
  }

  replacePatterns(patterns) {
    this.patterns = patterns;
    this.$piece.empty();
    for (var i = 0; i < this.patterns.length; i++) {
      this.$piece.append(this.patterns[i].$pattern);
    }
    this.updateRender();
    console.log(`[page editor][${this.component.tag} piece]: update patterns`);
  }

  // update
  updateRender(e) {
    this.updatePatternInfo();
    this.updatePatterns();
    this.updateHeight();
    this.updateElement(e);
  }

  updatePatternInfo() {
    for (var i = 0; i < this.patterns.length; i++) {
      var pattern = this.patterns[i];
      pattern.updateIndex(i);
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

  updateElement(e) {
    if (e) {
      let $target = $(e.target);
      selectMode_currentSelectEvent = e;
      let p1 = this.$piece.offset();
      let p2 = $target.offset();
      let handler = new ElementAttributeHandler(e, this);
      exEventEmitter.emit('selectSomething', handler);
      this.component.updateElementSelectedBorder({
        left: parseInt((p2.left - p1.left) * window._zoom_),
        top:  parseInt((p2.top - p1.top) * window._zoom_),
        width: parseInt($target.outerWidth() * window._zoom_),
        height: parseInt($target.outerHeight() * window._zoom_),
        opacity: 1
      }, handler);
    } else if (!selectMode_currentSelectEvent) {
      this.component.updateElementSelectedBorder({
        opacity: 0
      });
    }
  }

  ////////
  cancelSelectHoverAll() {
    exEventEmitter.emit('cancelSelectd');
    exEventEmitter.emit('cancelHoverElement', this.component.tag);
  }
}