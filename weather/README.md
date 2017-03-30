# weather
Show weather by city. A work in progress.

### Heads up!
`api.openweathermap.org/data/2.5/weather` returns random error messages on `q=barbapappa`
- `{"cod": "502", "message": "Error: Not found city"}`
- `{"cod": "404", "message": "city not found"}`
- For the time being, to be safe, you should check the presence of `response.message` and `response.cod !== 200`
- Also - There is no discernible mapping between `response.weather.icon` and [meteocons](http://www.alessioatzeni.com/meteocons/).

# setup
``` bash
$ npm install
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
# run unit tests
npm run unit
# run all tests
npm test
```

# api-server
```
# runs on port 5678. See proxytable in config/index.js for details
$ npm run api-server
# run test
$ npm run api-server-test
```
Note: api-server needs an `api_key` in `secrets.json` in root.

# Todos
- [x] proxytable
- [x] complete json api
- [x] simple api-server test
- [ ] decide on `lang` and how inclusive we should be
- [ ] client test with `mocha`
- [x] client main UI
- [x] weather icons
- [ ] google fonts
- [ ] deploy

# license
MIT
