import {PatternGroup} from './../pattern'
import patterns from './patterns'

export default class TeamPatternGroup extends PatternGroup {
  constructor() {
    super('Team', patterns);
  }
}
TeamPatternGroup.patterns = patterns;