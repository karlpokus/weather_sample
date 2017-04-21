function request(city) {
  return new Promise((resolve, reject) => {
    
    var http = new XMLHttpRequest();
        http.open('POST', 'api/v1/weather/');
        http.onerror = reject.bind(null, 'Sorry. api call failure');
  
    http.onreadystatechange = function() {
      if (http.readyState == 4) {
  
        if (http.status == 200) {
          resolve(JSON.parse(http.responseText));
  
        } else if (http.status == 404) {
          reject('Sorry. ' + city + ' not found');
  
        } else {
          reject('Sorry. Server failure');
        }
      }
    }
  
    http.send(JSON.stringify({city: city}));
  });
}

export default request;
