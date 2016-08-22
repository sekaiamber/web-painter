var sass = require('node-sass');
var glob = require("glob");
var path = require("path");
var fs = require("fs");

console.log('Welcome')
console.log('Web painter bundle css file creater');

var files = glob.sync(path.join(__dirname, '..', '/app') + '/htmlTemplates/**/*.@(css|scss)');

console.log('find ' + files.length + ' files:');
for (var i = 0; i < files.length; i++) {
  console.log(files[i]);
}

console.log('\n')
console.log('\n')

var renderedFile = '';

var result;
// custom files
for (var i = 0; i < files.length; i++) {
  result = files[i];
  console.log('rendering: ' + result);
  result = sass.renderSync({
    file: result
  });
  result = result.css.toString();
  result = '\n/* ' + files[i].split('htmlTemplates')[1] + ' */\n\n' + result;
  renderedFile += result;
}
// ant design
console.log('rendering: ant design css');
result = sass.renderSync({
  file: path.join(__dirname, '..', '/node_modules') + '/antd/dist/antd.css',
  outputStyle: 'compressed'
});
result = result.css.toString();
result = '\n/* ant design */\n\n' + result;
renderedFile += result;

fs.writeFileSync(path.join(__dirname, '..', '/app', '/htmlTemplates', '/export') + '/bundle.css.wpexport', renderedFile);

console.log('done')
// sass.render({
//   file: scss_filename,
// }, function(err, result) { /*...*/ });