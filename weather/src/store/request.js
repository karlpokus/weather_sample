function request(city, cb) {
  var http = new XMLHttpRequest();
      http.open('POST', 'api/weather/');
      http.onerror = cb.bind(null, 'Sorry. api call failure');
        
  http.onreadystatechange = function() {
    if (http.readyState == 4) {
      
      if (http.status == 200) {
        cb(null, JSON.parse(http.responseText));
            
      } else if (http.status == 404) {
        cb('Sorry. ' + city + ' not found');
              
      } else {
        cb('Sorry. Server failure');
      }
    }
  }

  http.send(JSON.stringify({city: city}));
}

export default request;