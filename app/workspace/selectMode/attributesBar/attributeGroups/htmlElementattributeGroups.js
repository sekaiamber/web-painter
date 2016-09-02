import groups from './attributeGroups'

const basicGroupmap = {
  p: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h1: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h2: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h3: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h4: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h5: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h6: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  a: [groups.TypeAttributeGroup, groups.LinkAttributeGroup]
}

const specialGroupmap = {
  linkList: [groups.LinkListDataAttributeGroup]
}

export default function (nodeName, specialGroupName) {
  let ret;
  if (basicGroupmap[nodeName]) {
    ret = basicGroupmap[nodeName];
  } else {
    ret = [];
  }
  if (specialGroupmap[specialGroupName]) {
    ret = specialGroupmap[specialGroupName].concat(ret);
  }
  return ret;
}