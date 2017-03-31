var path = require('path'),
    dir = function(str) {
      return path.resolve('api-server', 'lib', str);
    },
    jsonParser = require(dir('jsonparser')),
    request = require(dir('request')),
    compileWeather = require(dir('compileWeather'));

function cityNotFound(city, weather) {
  return weather.message || weather.cod !== 200
    // || city.city.toLowerCase() !== weather.name.toLowerCase(); not sure if this is a good idea
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
