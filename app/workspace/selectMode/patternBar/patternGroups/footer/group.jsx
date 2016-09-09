import {PatternGroup} from './../pattern'
import patterns from './patterns'

export default class FooterPatternGroup extends PatternGroup {
  constructor() {
    super('Footer', patterns);
  }
}
FooterPatternGroup.patterns = patterns;