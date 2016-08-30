import {PatternGroup} from './../pattern'
import patterns from './patterns'

export default class NavigationPatternGroup extends PatternGroup {
  constructor() {
    super('Navigation', patterns);
  }
}
NavigationPatternGroup.patterns = patterns;