import $ from 'jquery';
import attributeHelper from './../../../pageEditor/attributeHandler/pageAttribute'

export default {
  selector: '[wp-bg-img]',
  handler: function (dom, ep) {
    let $dom = $(dom);
    let info = attributeHelper['backgroundImage'].get($dom);
    let src;
    switch (info.type) {
      case 'preset':
        src = ep.getPresetAsset(info.target);
        break;
      case 'project':
        src = ep.getProjectAsset(info.target);
        break;
    }
    $dom.css('backgroundImage', `url(${src})`);
  }
}