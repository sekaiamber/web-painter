import groups from './attributeGroups'

const groupmap = {
  p: [groups.TypeAttributeGroup],
  h1: [groups.TypeAttributeGroup],
  h2: [groups.TypeAttributeGroup],
  h3: [groups.TypeAttributeGroup],
  h4: [groups.TypeAttributeGroup],
  h5: [groups.TypeAttributeGroup],
  h6: [groups.TypeAttributeGroup],
}

export default function (nodeName) {
  if (groupmap[nodeName]) {
    return groupmap[nodeName];
  } else {
    return [];
  }
}