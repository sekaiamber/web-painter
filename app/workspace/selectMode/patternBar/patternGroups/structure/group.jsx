import {PatternGroup} from './../pattern'
import patterns from './patterns'

export default class StructurePatternGroup extends PatternGroup {
  constructor() {
    super('Structure', patterns);
  }
}
StructurePatternGroup.patterns = patterns;