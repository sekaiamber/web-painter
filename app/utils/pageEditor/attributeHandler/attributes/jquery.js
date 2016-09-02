import $ from 'jquery'

export default {
  text: {
    set($dom, value) {
      $dom.text(value);
    },
    get($dom) {
      return $dom.text()
    }
  },
}