import $ from 'jquery';
import attributeHelper from './../../../pageEditor/attributeHandler/pageAttribute'

export default {
  selector: 'img',
  handler: function (dom, ep) {
    let $dom = $(dom);
    let type = attributeHelper['imageType'].get($dom);
    let target = attributeHelper['imageTarget'].get($dom);
    let src;
    switch (type) {
      case 'preset':
        src = ep.getPresetAsset(target);
        break;
      case 'project':
        src = ep.getProjectAsset(target);
        break;
    }
    $dom.attr('src', src);
  }
}