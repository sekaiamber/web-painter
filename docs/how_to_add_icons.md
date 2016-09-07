# 如何增加一系列icon

1. 至`assets/fonts/icons/`目录下新建一个icon的目录。

2. 在第1步的目录下放置对应的fonts文件和css样式，建议分文件夹放置。

3. 至`app/workspace/utils/icons/`目录下放置数据文件，格式为json，参考`et-line.json`。

4. 在`app/workspace/utils/iconModal.scss`中import之前放置的css样式文件。

5. 在`app/workspace/utils/iconModal.jsx`中增加icon的tab。

6. 在`app/htmlTemplates/export/page.html`中增加icon的css样式引用。

7. 在`app/utils/ipc/export/exportCopyList.json`中增加那些icon相关文件作为输出复制文件使用。