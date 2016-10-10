export default class ColorList {
  constructor(arr) {
    arr = arr || [];
    for (var i = 0; i < arr.length; i++) {
      this[i] = arr[i]
    }
    this.length = arr.length;
    Object.getOwnPropertyNames(arr.__proto__).map((funcName) => {
      if (typeof arr.__proto__[funcName] == 'function') {
        this[funcName] = arr.__proto__[funcName].bind(this);
      }
    });
  }

  hasColor(color) {
    color.a == color.a || 1;
    for (var i = 0; i < this.length; i++) {
      var _color = this[i];
      if (_color.r == color.r &&
          _color.g == color.g &&
          _color.b == color.b &&
          _color.a == color.a) {
        return true;
      }
    }
    return false
  }
}

const defaultColor = [{
  r: 103,
  g: 58,
  b: 183,
  a: .3
}, {
  r: 103,
  g: 58,
  b: 183,
  a: .5
}, {
  r: 103,
  g: 58,
  b: 183,
  a: .7
}, {
  r: 103,
  g: 58,
  b: 183,
  a: .9
}]

export {
  defaultColor
}