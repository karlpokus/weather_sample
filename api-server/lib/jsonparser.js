module.exports = function(obj, cb) {
  var data = '';
  
  obj
    .on('error', cb)
    .on('data', function(chunk){
      data += chunk;
    })
    .on('end', function(){
      try {
        var parsed = JSON.parse(data);
        cb(null, parsed);
  
      } catch(err) {
        cb(err);
      }
    });
}