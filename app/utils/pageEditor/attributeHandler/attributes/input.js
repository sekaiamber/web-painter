import $ from 'jquery'

export default {
  inputPlaceholder: {
    set($dom, value) {
      $('input', $dom).attr("placeholder", value)
    },
    get($dom) {
      return $('input', $dom).attr("placeholder") || ""
    }
  },
  inputPrefix: {
    set($dom, value) {
      if (value) {
        let $prefix = $('.input-group-addon:first-child', $dom);
        if ($prefix.length == 0) {
          $prefix = $('<span class="input-group-addon" wp-no-select>' + value + '</span>');
          $dom.prepend($prefix);
        } else {
          $prefix.text(value);
        }
      } else {
        $('.input-group-addon:first-child', $dom).remove();
      }
      $('.input-group-addon', $dom).length > 0 ? $dom.addClass('input-group') : $dom.removeClass('input-group');
    },
    get($dom) {
      return $('.input-group-addon:first-child', $dom).text()
    }
  },
  inputSuffix: {
    set($dom, value) {
      if (value) {
        let $prefix = $('.input-group-addon:last-child', $dom);
        if ($prefix.length == 0) {
          $prefix = $('<span class="input-group-addon" wp-no-select>' + value + '</span>');
          $dom.append($prefix);
        } else {
          $prefix.text(value);
        }
      } else {
        $('.input-group-addon:last-child', $dom).remove();
      }
      $('.input-group-addon', $dom).length > 0 ? $dom.addClass('input-group') : $dom.removeClass('input-group');
    },
    get($dom) {
      return $('.input-group-addon:last-child', $dom).text()
    }
  },
  inputSize: {
    set($dom, value) {
      let old = $dom.attr('wp-input-size');
      $dom.attr('wp-input-size', value);
      $dom.removeClass('input-group-' + old);
      $dom.addClass('input-group-' + value);
    },
    get($dom) {
      return $dom.attr('wp-input-size') || 'nm'
    }
  },
  inputDisable: {
    set($dom, value) {
      if (value) {
        $dom.attr('wp-input-disable', '')
      } else {
        $dom.removeAttr('wp-input-disable')
      }
    },
    get($dom) {
      return $dom.attr('wp-input-disable') == ''
    }
  },
  selectOptions: {
    set($dom, value) {
      $dom.empty();
      for (var i = 0; i < value.length; i++) {
        var option = value[i];
        $dom.append('<option value="' + option.value + '" wp-no-select>' + option.text + '</option>')
      }
    },
    get($dom) {
      let ret = $.makeArray($('option', $dom).map(function () {
        return {
          value: $(this).attr('value'),
          text: $(this).text() || ""
        }
      }));
      return ret;
    }
  },
  checkboxLabel: {
    set($dom, value) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      $('span', $dom).text(value);
    },
    get($dom) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      return $('span', $dom).text();
    }
  },
  checkboxDisable: {
    set($dom, value) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      $dom = $('input', $dom);
      if (value) {
        $dom.attr('wp-input-disable', '')
      } else {
        $dom.removeAttr('wp-input-disable')
      }
    },
    get($dom) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      $dom = $('input', $dom);
      return $dom.attr('wp-input-disable') == ''
    }
  },
  checkboxName: {
    set($dom, value) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      $dom = $('input', $dom);
      $dom.attr('name', value);
    },
    get($dom) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      $dom = $('input', $dom);
      return $dom.attr('name') || ""
    }
  },
  radioLabel: {
    set($dom, value) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      $('span', $dom).text(value);
    },
    get($dom) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      return $('span', $dom).text();
    }
  },
  radioDisable: {
    set($dom, value) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      $dom = $('input', $dom);
      if (value) {
        $dom.attr('wp-input-disable', '')
      } else {
        $dom.removeAttr('wp-input-disable')
      }
    },
    get($dom) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      $dom = $('input', $dom);
      return $dom.attr('wp-input-disable') == ''
    }
  },
  radioName: {
    set($dom, value) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      $dom = $('input', $dom);
      $dom.attr('name', value);
    },
    get($dom) {
      if ($dom[0].tagName == 'INPUT' || $dom[0].tagName == 'SPAN') {
        $dom = $dom.parent();
      }
      $dom = $('input', $dom);
      return $dom.attr('name') || ""
    }
  }
}