let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/blog/left-image-right-blog.html');
require('./../../../../../../htmlTemplates/patterns/blog/left-image-right-blog.scss');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class LeftImageRightBlogPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'left-image-right-blog'
  }
  renderSample() {
    return (
      <img src="assets/images/left-image-right-blog.png" srcSet="assets/images/left-image-right-blog@2x.png 2x"/>
    )
  }
}
LeftImageRightBlogPattern.patternTag = 'left-image-right-blog';
LeftImageRightBlogPattern.attributeGroups = attributeGroups;
LeftImageRightBlogPattern.plainHtmlText = htmlTemplate;