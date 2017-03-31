var weatherMap = {
  "Clouds": {
    icon: "H",
    color: "#E4B162" // yellow
  },
  "Clear": {
    icon: "B",
    color: "#EB9861" // red
  },
  "Rain": {
    icon: "R",
    color: "#A4E4F3" // blue
  },
  "Mist": {
    icon: "E",
    color: "#36acc0" // dark blue
  },
  "Drizzle": {
    icon: "Q",
    color: "#A4E4F3" // blue
  },
  "Fog": {
    icon: "L",
    color: "#E4B162" // yellow
  },
  "Snow": {
    icon: "W",
    color: "#36acc0" // dark blue
  },
  "unknown": {
    icon: ')',
    color: '#42B983' // green
  }
};

module.exports = function(data) {
  var payload = {};
  
  if (data.weather.length &&
      data.weather[0].main &&
      weatherMap[data.weather[0].main]) {
              
      payload.icon = weatherMap[data.weather[0].main].icon;
      payload.color = weatherMap[data.weather[0].main].color;
          
  } else {
    payload.icon = weatherMap.unknown.icon;
    payload.color = weatherMap.unknown.color;
  }
  
  payload.city = data.name + ', ' + data.sys.country;
  payload.temp = Math.floor(data.main.temp);
  
  return payload;
}