import PagePattern from './../pageEditor/pagePattern'
import patternGroups from './../../workspace/selectMode/patternBar/patternGroups/groups'

export function getPatternFrom$dom($pattern, pagePiece, index) {
  let wpg = $pattern.attr('wp-pattern').split('/');
  let wp = wpg[1];
  wpg = wpg[0];
  wp = patternGroups[wpg].patterns[wp];
  let ret = new PagePattern(wp, pagePiece, index, $pattern);
  return ret;
}