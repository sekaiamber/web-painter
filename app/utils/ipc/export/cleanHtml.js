import $ from 'jquery';
import elementExportHandler from './elementExportHandler'
const cleanAttrs = [
  // global
  'wp-no-select', 'wp-raw', 'wp-element', 'wp-pattern', 'wp-pattern-index',
  // linklist
  'wp-a-self-page', 'wp-a-href'
]

export default function(html) {
  let $dom = $(html);
  let $c
  // deal with wp-element
  $c = $('[wp-element]', $dom);
  $c.each(function (index) {
    let en = $c.attr('wp-element');
    if (elementExportHandler[en]) {
      elementExportHandler[en](this);
    }
  })


  // remove attrs
  $c = $(cleanAttrs.map((k) => `[${k}]`).join(','), $dom);
  for (var i = 0; i < cleanAttrs.length; i++) {
    $c.removeAttr(cleanAttrs[i]);
  }

  // return
  $dom = $('<div></div>').append($dom);
  return $dom.html();
}