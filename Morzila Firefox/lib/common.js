window.setTimeout(function () {
  var version = config.welcome.version;
  if (!version) {
    app.tab.open(config.welcome.url);
    config.welcome.version = app.version();
  }
}, config.welcome.timeout);

// https://www.google.com/maps?q=
// https://www.bing.com/maps?q=
// https://yandex.com/maps/?ll=&text=
window.setTimeout(function() {
  app.context_menu.create("Search selection in " + config.target.name, "selection", function (e) {
    app.tab.open("https://" + config.target.path + config.target.TO.value + e);
  });
}, 500);

app.options.receive("storageData", function () {
  app.options.send("storageData", {
    "toIndex": config.target.TO.index,
  });
});

app.options.receive("TO", function (TO) {
  config.target.TO.value = TO.value;
  config.target.TO.index = TO.index;
});
