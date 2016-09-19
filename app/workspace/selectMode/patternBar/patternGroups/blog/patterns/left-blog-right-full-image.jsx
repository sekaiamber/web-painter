let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/blog/left-blog-right-full-image.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class LeftBlogRightFullImagePattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-blog-right-full-image'
  }
  renderSample() {
    return (
      <img src="assets/images/left-blog-right-full-image.png" srcSet="assets/images/left-blog-right-full-image@2x.png 2x"/>
    )
  }
}
LeftBlogRightFullImagePattern.patternTag = 'left-blog-right-full-image';
LeftBlogRightFullImagePattern.attributeGroups = attributeGroups;
LeftBlogRightFullImagePattern.plainHtmlText = htmlTemplate;