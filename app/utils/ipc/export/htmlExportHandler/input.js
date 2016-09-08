import $ from 'jquery';
import attributeHelper from './../../../pageEditor/attributeHandler/pageAttribute'

export default {
  selector: 'input',
  handler: function (dom, ep) {
    let $dom = $(dom);
    let disable = attributeHelper['inputDisable'].get($dom);
    if (disable) {
      $dom.attr('disabled', 'disabled');
    } else {
      $dom.removeAttr('disabled');
    }
    
  }
}