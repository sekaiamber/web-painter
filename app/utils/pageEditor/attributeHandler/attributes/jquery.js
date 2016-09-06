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
  html: {
    set($dom, value) {
      $dom.html(value);
    },
    get($dom) {
      return $dom.html()
    }
  },
  textContent: {
    set($dom, value) {
      if ($('.content', $dom).length > 0) {
        $dom = $('.content', $dom);
      }
      $dom.text(value);
    },
    get($dom) {
      if ($('.content', $dom).length > 0) {
        $dom = $('.content', $dom);
      }
      return $dom.text()
    }
  }
}