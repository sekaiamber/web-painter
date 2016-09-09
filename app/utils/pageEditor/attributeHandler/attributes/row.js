import $ from 'jquery'

export default {
  rowCount: {
    set($dom, value) {
      let colWidth = parseInt(12 / value);
      let $cols = $('>div', $dom);
      $cols.removeClass('col-md-1 col-md-2 col-md-3 col-md-4 col-md-6 col-md-12')
      if (value > $cols.length) {
        for (var i = 0; i < value - $cols.length; i++) {
          $dom.append(`<div wp-no-select><div class="pe-element raw" wp-raw></div></div>`)
        }
      }
      if (value < $cols.length) {
        $('>div:gt(' + (value - 1) + ')', $dom).remove();
      }
      $('>div', $dom).addClass('col-md-' + colWidth);
    },
    get($dom) {
      return $('>div', $dom).length
    }
  }
}