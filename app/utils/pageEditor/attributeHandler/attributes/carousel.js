import $ from 'jquery'
import imageattrs from './image'
import attrattrs from './attr'

let carouselWithThumbnails = {
  set($dom, value) {
    $('.carousel-thumbnails', $dom).remove();
    if (value) {
      let id = $('.carousel', $dom).attr('id');
      let $tbs = $('<div class="carousel-thumbnails row"></div>');
      let $imgs = $('.item img', $dom).clone();
      $tbs.append($imgs);
      let colWithd = $imgs.length > 6 ? 2 : colMap[$imgs.length];

      $('img', $tbs).wrap("<div class='carousel-thumbnail col-sm-" + colWithd + "' wp-no-select data-target='#" + id + "'></div>");
      $('.carousel-thumbnail', $tbs).each(function(i) {
        $(this).attr('data-slide-to', i);
      })
      $dom.append($tbs);
    }
  },
  get($dom) {
    let $tbs = $('.carousel-thumbnails', $dom)
    return $tbs.length > 0;
  }
}

export default {
  carouselImages: {
    set($dom, value) {
      let $carousel = $('.carousel', $dom);
      let id = $carousel.attr('id');
      let $inner = $('.carousel-inner', $carousel);
      let $indicators = $('.carousel-indicators', $carousel);
      let $imgs = $('.item img', $carousel);
      if (value.length > $imgs.length) {
        for (var i = 0; i < value.length - $imgs.length; i++) {
          $inner.append('<div class="item" wp-no-select><img wp-no-select><div class="carousel-caption"><p>一些文字说明</p></div></div>');
          $indicators.append('<li data-target="#' + id + '" data-slide-to="' + ($imgs.length + i) + '" wp-no-select></li>')
        }
      } else if (value.length < $imgs.length) {
        $('.item:gt(' + (value.length - 1) + ')', $inner).remove();
        $('li:gt(' + (value.length - 1) + ')', $indicators).remove();
      }
      $('.item img', $inner).each((i, e) => {
        let $e = $(e);
        imageattrs.imageType.set($e, value[i].type);
        imageattrs.imageTarget.set($e, value[i].target);
        attrattrs.src.set($e, value[i].src);
      });
      $('.item', $inner).removeClass('active');
      $('li', $indicators).removeClass('active');
      $('.item:eq(0)', $inner).addClass('active');
      $('li:eq(0)', $indicators).addClass('active');
      $carousel.carousel();
      carouselWithThumbnails.set($dom, carouselWithThumbnails.get($dom));
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
  },
  carouselWithThumbnails: carouselWithThumbnails
}