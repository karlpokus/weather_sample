var http = require('http'),
    path = require('path'),
    querystring = require('querystring'),
    api_key = process.env.WEATHER_API_KEY ||
      require(path.resolve('secrets')).openWeatherMap.api_key;

module.exports = function(city, cb) {
  var base = 'http://api.openweathermap.org/data/2.5/weather?',
      query = querystring.stringify({
        q: city,
        units: 'metric',
        appid: api_key
      }),
      url = base + query;

  http.get(url, cb.bind(null, null))
    .on('error', cb);
}
