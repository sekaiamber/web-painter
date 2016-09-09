import groups from './attributeGroups'

const basicGroupmap = {
  p: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h1: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h2: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h3: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h4: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h5: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  h6: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  span: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  label: [groups.TypeAttributeGroup, groups.ContentAttributeGroup],
  a: [groups.TypeAttributeGroup, groups.LinkAttributeGroup],
  img: [groups.ImageAttributeGroup],
  blockquote: [groups.TypeAttributeGroup, groups.BlockquoteAttributeGroup, groups.ContentAttributeGroup],
  video: [groups.AppearanceAttributeGroup, groups.VideoAttributeGroup],
}

const specialGroupmap = {
  linkList: [groups.LinkListDataAttributeGroup],
  twoColStructure: [groups.TwoColStructureAttributeGroup],
  icon: [groups.IconAttributeGroup],
  carousel: [groups.CarouselAttributeGroup],
  button: [groups.ButtonAttributeGroup],
  dropdown: [groups.DropdownAttributeGroup],
  input: [groups.InputAttributeGroup],
  selector: [groups.SelectorAttributeGroup],
  checkbox: [groups.CheckboxAttributeGroup],
  radio: [groups.RadioAttributeGroup],
  device: [groups.DeviceAttributeGroup]
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