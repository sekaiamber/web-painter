import $ from 'jquery'

const styleList = ['default', 'primary', 'success', 'info', 'warning', 'danger']

export default {
  panelHeading: {
    set($dom, value) {
      let heading = $('.panel-heading', $dom);
      if (value && heading.length == 0) {
        $dom.prepend('<div class="panel-heading" wp-no-select><h3>Panel title</h3></div>');
      } else {
        heading.remove();
      }
    },
    get($dom) {
      return $('.panel-heading', $dom).length > 0;
    }
  },
  panelStyle: {
    set($dom, value) {
      if (styleList.indexOf(value) == -1) return;
      let type = this.get($dom);
      if (type != value) {
        $dom.removeClass('panel-' + type);
        $dom.addClass('panel-' + value);
      }
    },
    get($dom) {
      let cls = $dom.attr('class').split(/\s+/);
      cls = cls.find((c) => {
        return c.startsWith('panel-') && styleList.indexOf(c.slice(6)) > -1
      })
      cls = cls || 'default'
      return cls.slice(6);
    }
  },
  panelFooter: {
    set($dom, value) {
      let heading = $('.panel-footer', $dom);
      if (value && heading.length == 0) {
        $dom.append('<div class="panel-footer" wp-no-select><span>Panel footer</span></div>');
      } else {
        heading.remove();
      }
    },
    get($dom) {
      return $('.panel-footer', $dom).length > 0;
    }
  }
}