var express = require('express'),
    app = express(),
    port = 5678,
    bodyparser = function(req, res, next){
      var data = '';
      
      req
        .on('error', next)
        .on('data', function(chunk){
          data += chunk;
        })
        .on('end', function(){
          req.data = data;
          next();
        })
    },
    finalHandler = function(req, res, next) {
      console.log('city', req.data);
      var temp = 18;
      res.send(JSON.stringify({temp: temp}));
    };

app.post('/test', [bodyparser, finalHandler]);

// add errorhandler

app.listen(port, function () {
  console.log('api-server listening on port ' + port);
})