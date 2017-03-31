var http = require('http'),
    path = require('path'),
    querystring = require('querystring'),
    secrets = require(path.resolve('secrets'));

module.exports = function(city, cb) {
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