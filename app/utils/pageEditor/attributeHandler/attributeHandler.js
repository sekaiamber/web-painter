import $ from 'jquery'
import attributeHelper from './pageAttribute'
import getElementAttributeGroups from './../../../workspace/selectMode/attributesBar/attributeGroups/htmlElementattributeGroups'

export default class BaseAttributeHandler {
  constructor(obj) {
    this.$dom = obj.$dom;
    this.renderer = obj.renderer;
    this.attributeGroups = obj.attributeGroups;
    this.attributeKeys = ['id', 'class'];
    for (var i = 0; i < this.attributeGroups.length; i++) {
      this.attributeKeys = this.attributeKeys.concat(this.attributeGroups[i].attributeKeys);
    }
    this.tag = obj.tag;
  }
  // attrbute
  getAttribute(key) {
    return attributeHelper[key].get(this.$dom);
  }
  getAttributeObject () {
    let ret = {}
    this.attributeKeys.map((key) => {
      ret[key] = attributeHelper[key].get(this.$dom);
    });
    return ret;
  }

  setAttribute(key, value) {
    if (typeof key == 'object') {
      let prevValue = {};
      Object.keys(key).map((k) => {
        prevValue[k] = attributeHelper[k].get(this.$dom);
        attributeHelper[k].set(this.$dom, key[k]);
      });
      // 历史记录
      exEventEmitter.emit('addHistory', 'change element attribute', prevValue, key, () => {
        Object.keys(prevValue).map((k) => {
          attributeHelper[k].set(this.$dom, prevValue[k]);
        });
      }, () => {
        Object.keys(key).map((k) => {
          attributeHelper[k].set(this.$dom, key[k]);
        });
      })
    } else {
      let prevValue = attributeHelper[key].get(this.$dom);
      attributeHelper[key].set(this.$dom, value);
      // 历史记录
      exEventEmitter.emit('addHistory', 'change element attribute', prevValue, value, () => {
        attributeHelper[key].set(this.$dom, prevValue);
      }, () => {
        attributeHelper[key].set(this.$dom, value);
      })
    }
  }

  // render
  updateRender() {
    this.renderer.updateRender();
  }
}

export class PatternAttributeHandler extends BaseAttributeHandler {
  constructor(pagePattern, renderer) {
    super({
      $dom: pagePattern.$pattern,
      attributeGroups: pagePattern.attributeGroups,
      renderer: renderer,
      tag: pagePattern.tag
    })
  }
}

const elementTags = {
  p: 'Paragraph',
  h1: 'Head1',
  h2: 'Head2',
  h3: 'Head3',
  h4: 'Head4',
  h5: 'Head5',
  h6: 'Head6',
  img: 'Image'
}

export class ElementAttributeHandler extends BaseAttributeHandler {
  constructor(event, renderer) {
    let target = event.target;
    let $target = $(target);
    super({
      $dom: $target,
      attributeGroups: getElementAttributeGroups(target.nodeName.toLowerCase(), $target.attr('wp-element')),
      renderer: renderer,
      tag: elementTags[target.nodeName.toLowerCase()] || target.nodeName.toLowerCase()
    });

    this.event = event;
  }

  updateRender() {
    this.renderer.updateRender(this.event);
  }

  delete() {
    let $dom = this.$dom;
    this.renderer.cancelSelectHoverAll();
    // 历史记录
    let undo = () => {};
    let redo = () => {
      $dom.detach();
      this.renderer.cancelSelectHoverAll();
    };
    if ($dom.prev().length > 0) { // 如果有前面元素
      let $prev = $dom.prev();
      undo = () => {
        $prev.after($dom);
        this.renderer.cancelSelectHoverAll();
      }
    } else if ($dom.next().length > 0) { // 如果有后面元素
      let $next = $dom.next();
      undo = () => {
        $next.before($dom);
        this.renderer.cancelSelectHoverAll();
      }
    } else { // 当它是父元素中唯一的子元素时
      let $parent = $dom.parent();
      redo = () => {
        $dom.detach();
        $parent.append('<div class="pe-element raw" wp-raw></div>');
        this.renderer.cancelSelectHoverAll();
      }
      undo = () => {
        $parent.empty().append($dom);
        this.renderer.cancelSelectHoverAll();
      }
    }
    exEventEmitter.emit('addHistory', 'delete element', $dom, null, undo, redo);
    // 真正删除
    redo();
  }
}