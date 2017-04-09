var path = require('path'),
    lib = function(str) {
      return path.resolve('api-server', 'lib', str);
    },
    jsonParser = require(lib('jsonparser')),
    request = require(lib('request')),
    compileWeather = require(lib('compileWeather'));

module.exports = function(req, res, next) {

  jsonParser(req)
    .then(request)
    .then(jsonParser)
    .then(compileWeather)
    .then(function(weather){
      req.weather = weather;
      next();
    })
    .catch(next)
};
