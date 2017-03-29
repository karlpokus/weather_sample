var express = require('express'),
    app = express(),
    port = 5678,
    path = require('path'),
    dir = function(str) {
      return path.resolve('api-server', 'lib', str);
    },
    weather = require(dir('weather')),
    reply = require(dir('reply')),
    errorhandler = require(dir('errorhandler'));

// routes
app.post('/weather', [weather, reply]);
app.use(errorhandler);

app.listen(port, function () {
  console.log('api-server listening on port ' + port);
})

