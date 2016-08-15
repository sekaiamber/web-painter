const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../htmlTemplates');

export default class HtmlTemplateReader {
  read(file, callback) {
    console.log(__dirname, dir);
    console.log(fs);
    // fs.readFile('/app/1.html', (err, data) => {
    //   if (err) throw err;
    //   console.log(data);
    // });
  }
}