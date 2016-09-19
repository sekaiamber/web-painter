let React = require('react');
let htmlTemplate = require('./../../../../../../htmlTemplates/patterns/blog/three-image-heading-blog.html');
import $ from 'jquery'

import Pattern from './../../pattern'

import groups from './../../../../attributesBar/attributeGroups/attributeGroups'

import { PatternBaseAttributeGroup } from './../../pattern'
let attributeGroups = PatternBaseAttributeGroup;


export default class ThreeImageHeadingBlogPattern extends Pattern {
  constructor(props) {
    super(props);
    this.tag = 'three-image-heading-blog'
  }
  renderSample() {
    return (
      <img src="assets/images/three-image-heading-blog.png" srcSet="assets/images/three-image-heading-blog@2x.png 2x"/>
    )
  }
}
ThreeImageHeadingBlogPattern.patternTag = 'three-image-heading-blog';
ThreeImageHeadingBlogPattern.attributeGroups = attributeGroups;
ThreeImageHeadingBlogPattern.plainHtmlText = htmlTemplate;