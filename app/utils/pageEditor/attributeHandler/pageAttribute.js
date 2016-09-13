import cssattrs from './attributes/css'
import attrattrs from './attributes/attr'
import linklistattrs from './attributes/linklist'
import jqueryattrs from './attributes/jquery'
import imageattrs from './attributes/image'
import iconattrs from './attributes/icon'
import blockquoteattrs from './attributes/blockquote'
import videoattrs from './attributes/video'
import carouselattrs from './attributes/carousel'
import btattrs from './attributes/button'
import inputattrs from './attributes/input'
import bgattrs from './attributes/background'
import deviceattrs from './attributes/device'
import rowattrs from './attributes/row'
import _ from 'lodash'

let attrs = {};

_.merge(attrs, cssattrs);
_.merge(attrs, attrattrs);
_.merge(attrs, linklistattrs);
_.merge(attrs, jqueryattrs);
_.merge(attrs, imageattrs);
_.merge(attrs, iconattrs);
_.merge(attrs, blockquoteattrs);
_.merge(attrs, videoattrs);
_.merge(attrs, carouselattrs);
_.merge(attrs, btattrs);
_.merge(attrs, inputattrs);
_.merge(attrs, bgattrs);
_.merge(attrs, deviceattrs);
_.merge(attrs, rowattrs);


export default attrs;