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
      $dom.attr(key, value);
    },
    get($dom) {
      return $dom.attr(key);
    }
  }
});

cssKeys.map((key) => {
  attrs[key] = {
    set($dom, value) {
      $dom.css(key, value);
    },
    get($dom) {
      return $dom.css(key)
    }
  }
})

export default attrs;