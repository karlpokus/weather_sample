# weatherApp
Show weather by city per [these](https://github.com/Vinnovera/arbetsprov) requirements. [Demo](https://weatherapp-nyzljwjuqd.now.sh/)

# usage
Note: running the api-server requires an `api_key`.

### development
```bash
$ git clone [repo]
$ npm i
# serve client with hot reload on port 8080
$ npm run dev
# run api-server in parallel on port 5678. See proxytable in config/index.js for details
$ npm run api-server
# run unit tests
$ npm test
# run api-server test
$ npm run api-server
$ npm run api-test -- [city]
```

### production
```bash
# build for production with minification
$ npm run build
# serve client and api from api-server
$ npm start
```

# considerations for a v2.0
- Require city returned from api to match query
- Use the same request lib for server and client
- e2e tests with nightwatch
- More test coverage
- api throttle per the limit of 60 hits/min
- Validate city by `city.list.json`
- Language options like swedish

# a note on openweathermap
`api.openweathermap.org/data/2.5/weather` returns random error messages on `q=barbapappa`
- `{"cod": "502", "message": "Error: Not found city"}`
- `{"cod": "404", "message": "city not found"}`

For the time being, to be safe, check the presence of `response.message` and `response.cod !== 200`. Also - there is no discernible mapping between `response.weather.icon` and [meteocons](http://www.alessioatzeni.com/meteocons/) so I made one in `compileWeather.js`

# license
MIT
