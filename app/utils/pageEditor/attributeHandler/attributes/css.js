let attrs = {}

const cssKeys = [
  // appearance
  'padding', 'margin', 'width', 'height',
  // type setting
  'fontSize', 'lineHeight', 'textAlign',
  'top', 'left', 'color'
]

cssKeys.map((key) => {
  attrs[key] = {
    set($dom, value) {
      let prevValue = $dom.css(key) || '';
      $dom.css(key, value);
    },
    get($dom) {
      return $dom.css(key)
    },
    useStorage: true
  }
})

export default attrs;