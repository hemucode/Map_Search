var config = {};

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
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
