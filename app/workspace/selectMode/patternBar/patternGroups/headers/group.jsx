import {PatternGroup} from './../pattern'
import patterns from './patterns'

export default class HeadersPatternGroup extends PatternGroup {
  constructor() {
    super('Headers', patterns);
  }
}
HeadersPatternGroup.patterns = patterns;