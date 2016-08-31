import groups from './attributeGroups'

const basicGroupmap = {
  p: [groups.TypeAttributeGroup],
  h1: [groups.TypeAttributeGroup],
  h2: [groups.TypeAttributeGroup],
  h3: [groups.TypeAttributeGroup],
  h4: [groups.TypeAttributeGroup],
  h5: [groups.TypeAttributeGroup],
  h6: [groups.TypeAttributeGroup],
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