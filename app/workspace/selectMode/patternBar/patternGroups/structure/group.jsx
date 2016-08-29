import {PatternGroup} from './../pattern'
import patterns from './patterns'

export default class StructurePatternGroup extends PatternGroup {
  constructor() {
    super('structure', patterns);
  }
}
StructurePatternGroup.patterns = patterns;