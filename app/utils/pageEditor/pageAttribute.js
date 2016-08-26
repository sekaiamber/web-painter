import $ from 'jquery'

let attrs = {}

const attrKeys = ['id', 'class'];
const cssKeys = [
  // appearance
  'padding', 'margin', 'width', 'height',
  // type setting
  'fontSize', 'lineHeight', 'textAlign'
]


attrKeys.map((key) => {
  attrs[key] = {
    set($dom, value) {
      let prevValue = $dom.attr(key) || '';
      $dom.attr(key, value);
      // 历史记录
      exEventEmitter.emit('addHistory', 'change element attribute', prevValue, value, () => {
        $dom.attr(key, prevValue);
      }, () => {
        $dom.attr(key, value);
      })
    },
    get($dom) {
      return $dom.attr(key);
    }
  }
});

cssKeys.map((key) => {
  attrs[key] = {
    set($dom, value) {
      let prevValue = $dom.css(key) || '';
      $dom.css(key, value);
      // 历史记录
      exEventEmitter.emit('addHistory', 'change element style', prevValue, value, () => {
        $dom.css(key, prevValue);
      }, () => {
        $dom.css(key, value);
      })
    },
    get($dom) {
      return $dom.css(key)
    }
  }
})

export default attrs;