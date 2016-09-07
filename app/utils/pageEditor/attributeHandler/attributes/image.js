import $ from 'jquery'

export default {
  imageType: {
    set($dom, value) {
      $dom.attr('wp-img-type', value);
    },
    get($dom) {
      return $dom.attr('wp-img-type') || 'url'
    }
  },
  imageTarget: {
    set($dom, value) {
      $dom.attr('wp-img-target', value);
    },
    get($dom) {
      return $dom.attr('wp-img-target') || ''
    }
  },
  imageRound: {
    set($dom, value) {
      $dom.attr('wp-img-round', value);
      $dom.css('borderRadius', value + '%')
    },
    get($dom) {
      return parseInt($dom.attr('wp-img-round') || 0)
    }
  }
}