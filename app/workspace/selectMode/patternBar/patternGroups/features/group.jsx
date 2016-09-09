import {PatternGroup} from './../pattern'
import patterns from './patterns'

export default class FeaturesPatternGroup extends PatternGroup {
  constructor() {
    super('Features', patterns);
  }
}
FeaturesPatternGroup.patterns = patterns;