let attrs = {}

const attrKeys = ['id', 'class', 'alt', 'href', 'src', 'name'];

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

export default attrs;