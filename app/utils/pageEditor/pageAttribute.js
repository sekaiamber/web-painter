import $ from 'jquery'

export default {
  id: {
    set($dom, value) {
      $dom.attr('id', value);
    },
    get($dom) {
      return $dom.attr('id');
    }
  },
  class: {
    set($dom, value) {
      $dom.attr('class', value);
    },
    get($dom) {
      return $dom.attr('class');
    }
  },
  // appearance
  padding: {
    set($dom, value) {
      $dom.css('padding', value);
    },
    get($dom) {
      return $dom.css('padding')
    }
  },
  margin: {
    set($dom, value) {
      $dom.css('margin', value);
    },
    get($dom) {
      return $dom.css('margin')
    }
  },
  width: {
    set($dom, value) {
      $dom.css('width', value);
    },
    get($dom) {
      return $dom.css('width')
    }
  },
  height: {
    set($dom, value) {
      $dom.css('height', value);
    },
    get($dom) {
      return $dom.css('height')
    }
  }
}