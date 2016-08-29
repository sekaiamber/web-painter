# 如何新增一个Pattern

Pattern是Select模式下能添加至文档的一种结构，我们叫作“模式”，这个结构规定了一系列页面元素的布局。采用以下方法为程序新增一种Pattern。

1. 至`app/workspace/patternBar/patternBarGroups`中找到需要新增的Pattern所在的Group，在其中找到`patterns`目录，在此添加新增Pattern在选择工具中的样例的`ReactComponent`（参考`one-piece.jsx`）。

2. 至`app/htmlTemplates/patterns`中找到需要新增的Pattern的Group，并增加新增Pattern的HTML模板和CSS样式，注意需要将Group信息显式标记于最外层`div`的`wp-pattern`属性中（参考`one-piece.html`和`one-piece.scss`）。

3. 在第1步中的样例`ReactComponent`中绑定第2步中新增的`html`和`css`（参考`one-piece.jsx`）。

4. 至`app/workspace/patternBar/patternBarGroups`中找到需要新增的Pattern所在的Group，在其中`patterns.js`中注册Pattern。