import $ from 'jquery'

export default {
  videoAutoplay: {
    set($dom, value) {
      if (value) {
        $dom.attr('autoplay', 'autoplay');
      } else {
        $dom.removeAttr('autoplay');
      }
    },
    get($dom) {
      return $dom.attr('autoplay') != undefined
    }
  },
  videoLoop: {
    set($dom, value) {
      if (value) {
        $dom.attr('loop', 'loop');
      } else {
        $dom.removeAttr('loop');
      }
    },
    get($dom) {
      return $dom.attr('loop') != undefined
    }
  }
}