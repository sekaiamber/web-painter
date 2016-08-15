import $ from 'jquery'

export default class PageEditor {
  constructor(page) {
    this.$page = $(page);
  }

  updatePageDom(page) {
    this.$page = $(page);
  }

  initPageDom() {
    
  }
}