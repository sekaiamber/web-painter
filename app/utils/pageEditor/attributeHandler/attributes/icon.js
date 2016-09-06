import $ from 'jquery'

export default {
  iconTag: {
    set($dom, value) {
      let prev = $dom.attr("wp-icon");
      $dom.attr("wp-icon", value);
      $dom.removeClass(prev).addClass(value);
    },
    get($dom) {
      return $dom.attr("wp-icon")
    }
  },
  iconSize: {
    set($dom, value) {
      $dom.css("fontSize", value)
    },
    get($dom) {
      return $dom.css("fontSize")
    }
  }
}