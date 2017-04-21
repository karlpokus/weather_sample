var express = require('express'),
    app = express(),
    port = (process.env.NODE_ENV === 'production')? process.env.PORT : 5678,
    path = require('path'),
    lib = function(str) {
      return path.resolve('api-server', 'lib', str);
    },
    weather = require(lib('weather')),
    reply = require(lib('reply')),
    errorhandler = require(lib('errorhandler'));

app.use(express.static(path.resolve('dist')));
app.post('/api/v1/weather', [weather, reply]);
app.use(errorhandler);

app.listen(port, function () {
  console.log('api-server listening on port ' + port);
})
