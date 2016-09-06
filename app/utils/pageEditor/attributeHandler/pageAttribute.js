import cssattrs from './attributes/css'
import attrattrs from './attributes/attr'
import linklistattrs from './attributes/linklist'
import jqueryattrs from './attributes/jquery'
import imageattrs from './attributes/image'
import tcsattrs from './attributes/twoColStructure'
import iconattrs from './attributes/icon'
import _ from 'lodash'

let attrs = {};

_.merge(attrs, cssattrs);
_.merge(attrs, attrattrs);
_.merge(attrs, linklistattrs);
_.merge(attrs, jqueryattrs);
_.merge(attrs, imageattrs);
_.merge(attrs, tcsattrs);
_.merge(attrs, iconattrs);


export default attrs;