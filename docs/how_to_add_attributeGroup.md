# 如何增加一个AttributeGroup

`AttributeGroup`是指当你在`select`模式下选中一个元素或者pattern时，右侧属性栏跳出来的各种属性，某些属性具有相关性，我将他们设置为一个Group。

1. 至`app/workspace/selectMode/attributeBar/attributeGroups`中增加Group的`ReactComponent`。记得在Group的类设置一个静态的成员`attributeKeys`，这个属性将到`app/utils/pageEditor/attributeHandler`中获取和设置属性或者样式，请在这儿增加新的属性或样式handler，请参照这个目录中的`attributes/linklist.js`或其他属性，并在`pageAttribute.js`中注册。

2. 至`app/workspace/selectMode/attributeBar/attributeGroups/attributeGroups.js`中注册新增的Group。

3. 如果是Pattern的`AttributeGroup`，请在各个Pattern中增加`attributeGroups`静态成员。

4. 如果是html元素的`AttributeGroup`，请在`app/workspace/selectMode/attributeBar/attributeGroups/htmlElementattributeGroups.js`文件中注册。