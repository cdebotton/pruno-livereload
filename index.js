"use strict";

var livereload = require("tiny-lr")();
var watch = require("gulp-watch");

function LiveReloadTask(params) {
  params || (params = {});

  this.params = params;
};

LiveReloadTask.displayName = "LiveReloadTask";

LiveReloadTask.getDefaults = function() {
  return {
    lrPort: 35729,
    search: [
      "::dist/**/*",
      "./api/**/*",
      "::src/**/webpack-stats.json"
    ]
  };
};

LiveReloadTask.prototype.generateWatcher = function(gulp, params) {
  return function() {
    livereload.listen(params.lrPort);

    watch(params.search, function(event) {
      var fileName = path.relative(__dirname, event.path);
      livereload.changed({ body: { files: [fileName] } });
    });
  };
};

module.exports = LiveReloadTask;
