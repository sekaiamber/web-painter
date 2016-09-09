import {PatternGroup} from './../pattern'
import patterns from './patterns'

export default class CarouselsPatternGroup extends PatternGroup {
  constructor() {
    super('Carousels', patterns);
  }
}
CarouselsPatternGroup.patterns = patterns;

