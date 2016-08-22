const fs = require('fs');

export default {
  mkdirIfNotExist: function (path, mask, cb) {
    if (typeof mask == 'function') { // allow the `mask` parameter to be optional
        cb = mask;
        mask = 0o777;
    }
    fs.mkdir(path, mask, function(err) {
        if (err) {
            if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
            else cb(err); // something else went wrong
        } else cb(null); // successfully created folder
    });
  },
  writeFiles: function (fileOpts, callback) {
    console.log(fileOpts);
    let total = fileOpts.length;
    let index = 0;
    function wf(index) {
      if (index >= total) return;
      fs.writeFile(
        fileOpts[index].path,
        fileOpts[index].data,
        fileOpts[index].options,
        (err) => {
          callback(index, err, () => {
            wf(index + 1);
          })
        });
    }
    wf(index);
  }
}