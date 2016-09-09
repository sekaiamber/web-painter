import $ from 'jquery'

let textureClass = 'wp-bg-texture texture-paper texture-fabric texture-geometry-shapes texture-geometry-shapes-2 texture-pixels texture-dots texture-diagonal-lines texture-vertical-lines texture-square texture-square-lg texture-darken texture-darken-strong';

export default {
  backgroundStyle: {
    set($dom, value) {
      // 恢复默认
      $dom.css('background-size', '').css('background-repeat', '').css('background-position', '')

      switch (value) {
        case 'fill':
          $dom.css('background-size', 'cover');
          $dom.css('background-repeat', 'no-repeat');
          break;
        case 'repeat':
          $dom.css('background-repeat', 'repeat');
          break;
        case 'center':
          $dom.css('background-repeat', 'repeat');
          $dom.css('background-position', 'center');
          break;
      }
      $dom.attr('wp-bg-style', value);
    },
    get($dom) {
      return $dom.attr("wp-bg-style") || 'none'
    }
  },
  backgroundImage: {
    set($dom, value) {
      $dom.attr('wp-bg-img-type', value.type);
      $dom.attr('wp-bg-img-target', value.target);
      $dom.css('backgroundImage', value.src ? `url(${value.src})` : 'none');
      $dom.attr('wp-bg-img', '');
    },
    get($dom) {
      let src = $dom.css('backgroundImage');
      if (src && src != 'none') {
        src = src.replace(/["']/g, '');
        src = src.split('(')[1].split(')')[0];
      } else {
        src = null;
      }
      return {
        type: $dom.attr('wp-bg-img-type') || 'url',
        target: $dom.attr('wp-bg-img-target') || '',
        src: src
      }
    }
  },
  backgroundColor: {
    set($dom, value) {
      $dom.css('backgroundColor', value);
    },
    get($dom) {
      return $dom.css('backgroundColor')
    }
  },
  backgroundTexture: {
    set($dom, value) {
      // 恢复默认
      $dom.removeClass(textureClass);
      if (value == 'none') {
        return;
      }
      $dom.addClass('wp-bg-texture texture-' + value);
      $dom.attr('wp-bg-img-texture', value);
    },
    get($dom) {
      return $dom.attr('wp-bg-img-texture') || 'none'
    }
  }
}


