var config = {};

config.welcome = {
  "timeout": 3000,
  get version () {return app.storage.read('version')},
  set version (val) {app.storage.write('version', val)},
  "url": "https://www.downloadhub.cloud/2022/10/mapsearch.html"
};

config.target = {
  set name (val) {app.storage.write("target-name", val)},
  set path (val) {app.storage.write("target-path", val)},
  get name () {return app.storage.read("target-name") || "Maps"},
  get path () {return app.storage.read("target-path") || "www."},
  "TO": {
    set value (val) {app.storage.write("target-to-value", val)},
    set index (val) {app.storage.write("target-to-index", val + '')},
    get value () {return app.storage.read("target-to-value") || "google.com/maps?q="},
    get index () {return parseInt(app.storage.read("target-to-index") || "1")}
  }
};
