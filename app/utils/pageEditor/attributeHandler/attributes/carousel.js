import $ from 'jquery'
import imageattrs from './image'
import attrattrs from './attr'

export default {
  carouselImages: {
    set($dom, value) {
      let id = $dom.attr('id')
      let $inner = $('.carousel-inner', $dom);
      let $indicators = $('.carousel-indicators', $dom);
      let $imgs = $('.item img', $dom);
      if (value.length > $imgs.length) {
        for (var i = 0; i < value.length - $imgs.length; i++) {
          $inner.append('<div class="item" wp-no-select><img wp-no-select><div class="carousel-caption"><p>一些文字说明</p></div></div>');
          $indicators.append('<li data-target="#' + id + '" data-slide-to="' + ($imgs.length + i) + '" wp-no-select></li>')
        }
      }
      if (value.length < $imgs.length) {
        $('.item:gt(' + (value.length - 1) + ')', $inner).remove();
        $('li:gt(' + (value.length - 1) + ')', $indicators).remove();
      }
      $('.item img', $inner).each((i, e) => {
        let $e = $(e);
        imageattrs.imageType.set($e, value[i].type);
        imageattrs.imageTarget.set($e, value[i].target);
        attrattrs.src.set($e, value[i].src);
      });
      $dom.carousel();
    },
    get($dom) {
      let ret = [];
      $dom = $('.carousel-inner', $dom);
      $('.item img', $dom).each((i, e) => {
        let $e = $(e);
        ret.push({
          type: imageattrs.imageType.get($e),
          target: imageattrs.imageTarget.get($e),
          src: attrattrs.src.get($e)
        });
      })
      return ret;
    }
  }
}