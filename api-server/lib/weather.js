var path = require('path'),
    lib = function(str) {
      return path.resolve('api-server', 'lib', str);
    },
    jsonParser = require(lib('jsonparser')),
    request = require(lib('request')),
    compileWeather = require(lib('compileWeather'));

function cityNotFound(city, weather) {
  return weather.message || weather.cod !== 200;
    // || city.city.toLowerCase() !== weather.name.toLowerCase();
}

module.exports = function(req, res, next) {
  jsonParser(req, function(err, city){
    if (err) return next(err);

    request(city.city, function(err, apiResponse){
      if (err) return next(err);

      jsonParser(apiResponse, function(err, weather){
        if (err || cityNotFound(city, weather)) {
          return next(err || new Error('City could not be found'));
        }

        req.weather = compileWeather(weather);
        next();
      });
    });
  });
};
