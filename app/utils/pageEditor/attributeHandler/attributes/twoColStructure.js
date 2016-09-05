import $ from 'jquery'

export default {
  twoColStructureDividePosition: {
    set($dom, value) {
      $dom.attr('wp-tcs-divid', value);
      $('.col.left', $dom).css('width', (value * 100) + '%');
      $('.col.right', $dom).css('width', (100 - (value * 100)) + '%');
    },
    get($dom) {
      return parseFloat($dom.attr('wp-tcs-divid'));
    }
  },
  twoColStructureDivideWidth: {
    set($dom, value) {
      value = value / 2;
      $('.col.left', $dom).css('paddingRight', value);
      $('.col.right', $dom).css('paddingLeft', value);
    },
    get($dom) {
      return parseInt($('.col.left', $dom).css('paddingRight')) * 2;
    }
  },
}