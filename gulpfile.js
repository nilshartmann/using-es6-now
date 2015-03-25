var gulp = require("gulp");
var babel = require("gulp-babel");
var watch = require("gulp-watch");
var logger = require('gulp-logger');

gulp.task("client", function() {
  var SRC = "client/src/**/*.js";
  var DEST = "client/dist";
  return gulp.src(SRC)
    .pipe(watch(SRC))
    .pipe(logger({
      showChange: true
    }))
    .pipe(babel())
    .pipe(gulp.dest(DEST));
});

gulp.task("server", function () {
  var SRC = "server/src/**/*.js";
  var DEST = "server/dist";
  return gulp.src(SRC)
    .pipe(watch(SRC))
    .pipe(logger({
      showChange: true
    }))
    .pipe(babel({
      // only transform module statements and add strict header
      whitelist: ['es6.modules', 'strict']
		}))
    .pipe(gulp.dest(DEST));
});

gulp.task("default", ["server", "client"]);
