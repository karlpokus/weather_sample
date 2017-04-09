module.exports = function(obj) {
  return new Promise(function(resolve, reject){
    var data = '';

    obj
      .on('error', reject)
      .on('data', function(chunk){
        data += chunk;
      })
      .on('end', function(){
        if (!data) {
          reject(new Error('Parser error: no data'));
        }

        try {
          resolve(JSON.parse(data));
        } catch(err) {
          reject(err);
        }
      });
  });
}
