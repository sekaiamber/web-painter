import $ from 'jquery'

export default {
  rowCount: {
    set($dom, value) {
      let $cols = $('>div', $dom);
      if (value > $cols.length) {
        for (var i = 0; i < value - $cols.length; i++) {
          $dom.append(`<div class="col-sm-3" wp-no-select><div class="pe-element raw" wp-raw></div></div>`)
        }
      }
      if (value < $cols.length) {
        $('>div:gt(' + (value - 1) + ')', $dom).remove();
      }
    },
    get($dom) {
      return $('>div', $dom).length
    }
  },
  colWidths: {
    set($dom, value) {
      let $cols = $('>div', $dom);
      $cols.each((index, element) => {
        element = $(element)
        let cls = element.attr('class').split(' ');
        cls = cls.find((v) => {
          return v.startsWith('col-sm-')
        });
        if (cls && cls != 'col-sm-' + value[index]) {
          element.removeClass(cls);
        }
        if (cls != 'col-sm-' + value[index]) {
          element.addClass('col-sm-' + value[index])
        }
      });
    },
    get($dom) {
      let ret = [];
      let $cols = $('>div', $dom);
      $cols.each((index, element) => {
        let cls = $(element).attr('class').split(' ');
        cls = cls.find((v) => {
          return v.startsWith('col-sm-')
        });
        cls = cls || 'col-sm-3';
        cls = cls.slice(7)
        ret.push(parseInt(cls));
      });
      return ret;
    }
  }
}