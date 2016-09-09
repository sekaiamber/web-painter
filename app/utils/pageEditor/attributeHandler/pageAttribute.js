import cssattrs from './attributes/css'
import attrattrs from './attributes/attr'
import linklistattrs from './attributes/linklist'
import jqueryattrs from './attributes/jquery'
import imageattrs from './attributes/image'
import tcsattrs from './attributes/twoColStructure'
import iconattrs from './attributes/icon'
import blockquoteattrs from './attributes/blockquote'
import videoattrs from './attributes/video'
import carouselattrs from './attributes/carousel'
import btattrs from './attributes/button'
import inputattrs from './attributes/input'
import bgattrs from './attributes/background'
import _ from 'lodash'

let attrs = {};

_.merge(attrs, cssattrs);
_.merge(attrs, attrattrs);
_.merge(attrs, linklistattrs);
_.merge(attrs, jqueryattrs);
_.merge(attrs, imageattrs);
_.merge(attrs, tcsattrs);
_.merge(attrs, iconattrs);
_.merge(attrs, blockquoteattrs);
_.merge(attrs, videoattrs);
_.merge(attrs, carouselattrs);
_.merge(attrs, btattrs);
_.merge(attrs, inputattrs);
_.merge(attrs, bgattrs);


export default attrs;