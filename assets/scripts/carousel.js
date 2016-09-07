(function($){
  var api = {
    init: function (opt) {
      var $dom = $(this);
      $dom.addClass('wp-carousel');
      var state = api.checkState($dom);
      if (state.init) {
        api.update.call(this, opt);
      } else {
        var $container = $('<div class="wp-carousel-container"></div>')
        var $prev = $('<div class="wp-carousel-prev-bt ion ion-chevron-left"></div>');
        var $next = $('<div class="wp-carousel-next-bt ion ion-chevron-right"></div>');
        var $list = $('<div class="wp-carousel-"></div>');
        
      }
    },
    update: function (opt) {
      
    },
    destroy: function (opt) {
      
    },
    checkState: function ($dom) {
      var ret = {};
      ret.init = $dom.hasClass('wp-carousel-inited');
      return ret;
    }
  }

  $.fn.wp_carousel = function (key, opt) {
    key = key || 'init';
    if (api[key]) {
      api[key].call(this, opt);
    }
  }
})(window.jQuery || window._jquery);