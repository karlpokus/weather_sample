var fs = require('fs'),
    path = require('path'),
    file = path.resolve('dist', 'index.html');

module.exports = function(req, res){
  fs.createReadStream(file).pipe(res);
};
