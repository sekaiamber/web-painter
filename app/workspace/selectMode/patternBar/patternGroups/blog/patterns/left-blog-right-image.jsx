let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/blog/left-blog-right-image.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class LeftBlogRightImagePattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-blog-right-image'
  }
  renderSample() {
    return (
      <img src="assets/images/left-blog-right-image.png" srcSet="assets/images/left-blog-right-image@2x.png 2x"/>
    )
  }
}
LeftBlogRightImagePattern.patternTag = 'left-blog-right-image';
LeftBlogRightImagePattern.attributeGroups = attributeGroups;
LeftBlogRightImagePattern.plainHtmlText = htmlTemplate;