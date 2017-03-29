var path = require('path'),
    secrets = require(path.resolve('secrets')),
    http = require('http'),
    querystring = require('querystring');

function jsonParser(obj, cb) {
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

function apiCall(city, cb) {
  var base = 'http://api.openweathermap.org/data/2.5/weather?',
      query = querystring.stringify({
        q: city,
        units: 'metric',
        appid: secrets.openWeatherMap.api_key
      }),
      url = base + query;
  
  http.get(url, cb.bind(null, null))
    .on('error', cb);
}

function cityNotFound(city, weather) {
  return weather.message || weather.cod !== 200
    // || city.city.toLowerCase() !== weather.name.toLowerCase(); not sure if this is a good idea
}

module.exports = function(req, res, next) {
  
  jsonParser(req, function(err, city){
    if (err) return next(err);
    
    apiCall(city.city, function(err, apiResponse){
      if (err) return next(err);
      
      jsonParser(apiResponse, function(err, weather){
        if (err || cityNotFound(city, weather)) {
          next(err || new Error('City could not be found'));
        }
        
        req.weather = weather;
        next();
      });
    });
  });
};
