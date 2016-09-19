let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/blog/left-full-image-right-blog.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class LeftFullImageRightBlogPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-full-image-right-blog'
  }
  renderSample() {
    return (
      <img src="assets/images/left-full-image-right-blog.png" srcSet="assets/images/left-full-image-right-blog@2x.png 2x"/>
    )
  }
}
LeftFullImageRightBlogPattern.patternTag = 'left-full-image-right-blog';
LeftFullImageRightBlogPattern.attributeGroups = attributeGroups;
LeftFullImageRightBlogPattern.plainHtmlText = htmlTemplate;