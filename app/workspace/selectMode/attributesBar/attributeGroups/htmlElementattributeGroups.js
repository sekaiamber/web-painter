import groups from './attributeGroups'

const basicGroupmap = {
  p: [groups.TypeAttributeGroup, groups.ContentAttributeGroup, groups.AppearanceAttributeGroup],
  h1: [groups.TypeAttributeGroup, groups.ContentAttributeGroup, groups.AppearanceAttributeGroup],
  h2: [groups.TypeAttributeGroup, groups.ContentAttributeGroup, groups.AppearanceAttributeGroup],
  h3: [groups.TypeAttributeGroup, groups.ContentAttributeGroup, groups.AppearanceAttributeGroup],
  h4: [groups.TypeAttributeGroup, groups.ContentAttributeGroup, groups.AppearanceAttributeGroup],
  h5: [groups.TypeAttributeGroup, groups.ContentAttributeGroup, groups.AppearanceAttributeGroup],
  h6: [groups.TypeAttributeGroup, groups.ContentAttributeGroup, groups.AppearanceAttributeGroup],
  span: [groups.TypeAttributeGroup, groups.ContentAttributeGroup, groups.AppearanceAttributeGroup],
  label: [groups.TypeAttributeGroup, groups.ContentAttributeGroup, groups.AppearanceAttributeGroup],
  a: [groups.TypeAttributeGroup, groups.LinkAttributeGroup],
  img: [groups.ImageAttributeGroup],
  blockquote: [groups.TypeAttributeGroup, groups.BlockquoteAttributeGroup, groups.ContentAttributeGroup, groups.AppearanceAttributeGroup],
  video: [groups.AppearanceAttributeGroup, groups.VideoAttributeGroup, groups.AppearanceAttributeGroup],
  div: [groups.TypeAttributeGroup, groups.AppearanceAttributeGroup]
}

const specialGroupmap = {
  linkList: [groups.LinkListDataAttributeGroup],
  icon: [groups.IconAttributeGroup],
  carousel: [groups.CarouselAttributeGroup],
  button: [groups.ButtonAttributeGroup],
  dropdown: [groups.DropdownAttributeGroup],
  input: [groups.InputAttributeGroup],
  selector: [groups.SelectorAttributeGroup],
  checkbox: [groups.CheckboxAttributeGroup],
  radio: [groups.RadioAttributeGroup],
  device: [groups.DeviceAttributeGroup],
  row: [groups.RowAttributeGroup],
  panel: [groups.PanelAttributeGroup]
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