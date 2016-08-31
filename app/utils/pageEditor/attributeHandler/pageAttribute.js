import cssattrs from './attributes/css'
import attrattrs from './attributes/attr'
import linklistattrs from './attributes/linklist'
import _ from 'lodash'

let attrs = {};

_.merge(attrs, cssattrs);
_.merge(attrs, attrattrs);
_.merge(attrs, linklistattrs);


export default attrs;