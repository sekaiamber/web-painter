import $ from 'jquery'

export default {
  blockquoteAlign: {
    set($dom, value) {
      if (value == "right") {
        $dom.addClass("blockquote-right")
      } else {
        $dom.removeClass("blockquote-right")
      }
    },
    get($dom) {
      return $dom.hasClass("blockquote-right") ? "right" : "left"
    }
  }
}