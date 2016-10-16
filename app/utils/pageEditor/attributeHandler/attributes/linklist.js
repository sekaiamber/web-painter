import $ from 'jquery'

let linkListStyle = ['none', 'button']

export default {
  link: {
    set($dom, value) {
      $dom.text(value.text);
      $dom.attr('wp-a-href', value.href);
      $dom.attr('target', value.target);
      $dom.attr('wp-a-self-page', value.linkself ? "" : undefined);
    },
    get($dom) {
      return {
        text: $dom.text(),
        href: $dom.attr('wp-a-href') || '',
        target: $dom.attr('target') || '',
        linkself: $dom.attr('wp-a-self-page') == ""
      }
    }
  },
  linkInline: {
    set($dom, value) {
      if (value) {
        $dom.addClass('a-block');
      } else {
        $dom.removeClass('a-block');
      }
    },
    get($dom) {
      return $dom.hasClass('a-block');
    }
  },
  linkListData: {
    set($dom, value) {
      console.log(value);
      let $links = $('>a', $dom);
      $dom.empty();
      for (var i = 0; i < value.length; i++) {
        let link = value[i];
        let $link = $links[link.index];
        if ($link) {
          $link = $($link);
          $link.attr('wp-a-href', link.href);
          if (link.linkself) {
            $link.attr('wp-a-self-page', "");
          } else {
            $link.removeAttr('wp-a-self-page');
          }
          $link.attr('target', link.target);
        } else {
          $link = $(`<a wp-a-href="${link.href}" ${link.linkself ? 'wp-a-self-page' : ''} target="${link.target}" wp-no-select><span>Link</span></a>`);
        }
        $dom.append($link);
      }
    },
    get($dom) {
      let ret = [];
      $('>a', $dom).each((index, dom) => {
        ret.push({
          text: $(dom).text(),
          index: index,
          href: $(dom).attr('wp-a-href') || '',
          target: $(dom).attr('target') || '',
          linkself: $(dom).attr('wp-a-self-page') == ""
        })
      });
      return ret;
    }
  },
  linkListStyle: {
    set($dom, value) {
      if (linkListStyle.indexOf(value) == -1) return;
      if (value == 'none') {
        $dom.removeClass('btn-group');
        $('>a', $dom).removeClass('btn btn-default');
        $dom.attr('wp-element', 'linkList');
        $dom.removeAttr('role');
      } else if (value == "button") {
        $dom.addClass('btn-group');
        $('>a', $dom).addClass('btn btn-default');
        $dom.attr('wp-element', 'linkList button');
        $dom.attr('role', 'button');
      }
      $dom.attr('wp-linklist-style', value);
    },
    get($dom) {
      return $dom.attr('wp-linklist-style') || 'none';
    }
  }
}