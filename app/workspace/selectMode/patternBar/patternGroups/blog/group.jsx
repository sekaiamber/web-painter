import {PatternGroup} from './../pattern'
import patterns from './patterns'

export default class BlogPatternGroup extends PatternGroup {
  constructor() {
    super('Blog', patterns);
  }
}
BlogPatternGroup.patterns = patterns;