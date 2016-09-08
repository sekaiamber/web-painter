import $ from 'jquery'

export default {
  buttonCount: {
    set($dom, value) {
      let $as = $('a', $dom);
      if ($as.length < value) {
        for (var i = 0; i < value - $as.length; i++) {
          $dom.append('<a href="#" class="btn btn-default" role="button" wp-no-select><span>Button</span></a>')
        }
      }
      if ($as.length > value) {
        $('a:gt(' + (value - 1) + ')', $dom).remove();
      }
    },
    get($dom) {
      return $('a', $dom).length;
    }
  },
  buttonSize: {
    set($dom, value) {
      let old = $dom.attr('wp-bt-size');
      $dom.attr('wp-bt-size', value);
      $dom.removeClass('btn-group-' + old);
      $dom.addClass('btn-group-' + value);
    },
    get($dom) {
      return $dom.attr('wp-bt-size') || 'nm'
    }
  },
  buttonFill: {
    set($dom, value) {
      value ? $dom.addClass('btn-group-justified') : $dom.removeClass('btn-group-justified');
    },
    get($dom) {
      return $dom.hasClass('btn-group-justified')
    }
  },
  dropdownSize: {
    set($dom, value) {
      let old = $dom.attr('wp-dropdown-size');
      $dom.attr('wp-dropdown-size', value);
      $dom = $('>.btn', $dom);
      $dom.removeClass('btn-' + old);
      $dom.addClass('btn-' + value);
    },
    get($dom) {
      return $dom.attr('wp-dropdown-size') || 'nm'
    }
  },
  dropdownCount: {
    set($dom, value) {
      let $ul = $('ul', $dom);
      let $li = $('li', $ul);
      if ($li.length < value) {
        for (var i = 0; i < value - $li.length; i++) {
          $ul.append('<li wp-no-select><a wp-no-bubble>Dropdown link</a></li>')
        }
      }
      if ($li.length > value) {
        $('li:gt(' + (value - 1) + ')', $ul).remove();
      }
    },
    get($dom) {
      return $('.dropdown-menu a', $dom).length;
    }
  }
}