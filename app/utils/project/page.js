export default class Page {
  constructor(name) {
    this.name = name;

    // html meta info
    this.fileName = '';
    this.title = '';
    this.keyworads = '';
    this.description = '';

    // patterns
    this.patterns = [];
  }
}