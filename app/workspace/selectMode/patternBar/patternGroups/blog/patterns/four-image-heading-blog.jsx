let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/blog/four-image-heading-blog.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class FourImageHeadingBlogPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'four-image-heading-blog'
  }
  renderSample() {
    return (
      <img src="assets/images/four-image-heading-blog.png" srcSet="assets/images/four-image-heading-blog@2x.png 2x"/>
    )
  }
}
FourImageHeadingBlogPattern.patternTag = 'four-image-heading-blog';
FourImageHeadingBlogPattern.attributeGroups = attributeGroups;
FourImageHeadingBlogPattern.plainHtmlText = htmlTemplate;