# 如何新增一个Pattern Group

Pattern Group是Select模式下包含一系列Pattern的一种结构，某些Group在语义上存在相似性，将他们分类将更好地筛选需要的Pattern。

1. 至`app/workspace/patternBar/patternBarGroups`中建立新增Group目录（参考`structure`）。

2. 在第1步中建立的Group目录中新增`patterns`目录，`group.jsx`和`patterns.js`文件。

3. 在第2步中建立的`group.jsx`中建立Group的类。

4. 在第2步中建立的`patterns.js`中注册`patterns`目录中的Patterns。

5. 至`app/workspace/patternBar/patternBarGroups/groups.jsx`中注册Group。