import $ from 'jquery';

export default function (dom) {
  let $dom = $('>a', $(dom));
  $dom.each(function (index) {
    let $a = $(this)
    $a.attr('href', $a.attr('wp-a-href'));
    // link to project page
    if ($a.attr('wp-a-self-page') == "") {
      let page = pageEditor.project.pages.find((p) => p.name == $a.attr('wp-a-href'));
      if (page) {
        $a.attr('href', `./${page.fileName}.html`)
      }
    } else {
      // link to URL
      let href = $a.attr('href');
      if (!href.startsWith('http')) {
        $a.attr('href', `http://${$a.attr('href')}`)
      }
    }
  })
}