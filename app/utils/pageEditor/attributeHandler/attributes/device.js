import $ from 'jquery'
import imageattrs from './image'
import cssattrs from './css'

export default {
  deviceName: {
    set($dom, value) {
      $dom.attr("wp-device", value);
      $('img.wp-device-image', $dom).attr('src', `assets/images/devices/${value}.png`);
    },
    get($dom) {
      return $dom.attr("wp-device") || "Apple-iPhone-6s-Silver"
    }
  },
  deviceContent: {
    set($dom, value) {
      $dom = $('.wp-device-content img', $dom);
      imageattrs.imageType.set($dom, value.type);
      imageattrs.imageTarget.set($dom, value.target);
      $dom.attr('src', value.src);
    },
    get($dom) {
      $dom = $('.wp-device-content img', $dom);
      return {
        type: imageattrs.imageType.get($dom),
        target: imageattrs.imageTarget.get($dom),
        src: $dom.attr('src')
      }
    }
  },
  deviceContentTop: {
    set($dom, value) {
      $dom = $('.wp-device-content', $dom);
      cssattrs.top.set($dom, value);
    },
    get($dom) {
      $dom = $('.wp-device-content', $dom);
      return cssattrs.top.get($dom)
    }
  },
  deviceContentLeft: {
    set($dom, value) {
      $dom = $('.wp-device-content', $dom);
      cssattrs.left.set($dom, value);
    },
    get($dom) {
      $dom = $('.wp-device-content', $dom);
      return cssattrs.left.get($dom)
    }
  },
  deviceContentHeight: {
    set($dom, value) {
      $dom = $('.wp-device-content', $dom);
      cssattrs.height.set($dom, value);
    },
    get($dom) {
      $dom = $('.wp-device-content', $dom);
      return cssattrs.height.get($dom)
    }
  },
  deviceContentWidth: {
    set($dom, value) {
      $dom = $('.wp-device-content', $dom);
      cssattrs.width.set($dom, value);
    },
    get($dom) {
      $dom = $('.wp-device-content', $dom);
      return cssattrs.width.get($dom)
    }
  }
}