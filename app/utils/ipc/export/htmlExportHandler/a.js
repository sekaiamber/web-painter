import $ from 'jquery';
import attributeHelper from './../../../pageEditor/attributeHandler/pageAttribute'

export default {
  selector: 'a',
  handler: function (dom, ep) {
    let $dom = $(dom);
    $dom.attr('href', $dom.attr('wp-a-href'));
    // link to project page
    if ($dom.attr('wp-a-self-page') == "") {
      let page = pageEditor.project.pages.find((p) => p.name == $dom.attr('wp-a-href'));
      if (page) {
        $dom.attr('href', `./${page.fileName}.html`)
      }
    } else {
      // link to URL
      let href = $dom.attr('href');
      if (!href.startsWith('http')) {
        $dom.attr('href', `http://${$dom.attr('href')}`)
      }
    }
  }
}