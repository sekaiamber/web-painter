import cssattrs from './attributes/css'
import attrattrs from './attributes/attr'
import linklistattrs from './attributes/linklist'
import jqueryattrs from './attributes/jquery'
import _ from 'lodash'

let attrs = {};

_.merge(attrs, cssattrs);
_.merge(attrs, attrattrs);
_.merge(attrs, linklistattrs);
_.merge(attrs, jqueryattrs);


export default attrs;