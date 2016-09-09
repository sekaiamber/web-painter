import {PatternGroup} from './../pattern'
import patterns from './patterns'

export default class DevicesPatternGroup extends PatternGroup {
  constructor() {
    super('Devices', patterns);
  }
}
DevicesPatternGroup.patterns = patterns;