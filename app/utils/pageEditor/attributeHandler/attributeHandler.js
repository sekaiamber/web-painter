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
      Object.keys(key).map((k) => {
        attributeHelper[k].set(this.$dom, key[k]);
      })
    } else {
      attributeHelper[key].set(this.$dom, value);
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
}