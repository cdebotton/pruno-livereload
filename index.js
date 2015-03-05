"use strict";

var livereload = require("gulp-livereload");

function LiveReloadTask(params) {
  params || (params = {});

  this.params = params;
};

LiveReloadTask.name = "LiveReloadTask";
LiveReloadTask.getDefaults = function() {
  return { search: ["::dist/**/*", "./api/**/*"] };
};

LiveReloadTask.prototype.generateWatcher = function(gulp, params) {
  livereload.listen();

  return function() {
    gulp.watch(params.search, function(files) {
      gulp.src(files)
        .pipe(livereload());
    });
  };
};

module.exports = LiveReloadTask;
