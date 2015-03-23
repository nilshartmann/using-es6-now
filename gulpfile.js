var gulp = require("gulp");
var babel = require("gulp-babel");
var watch = require("gulp-watch");

var SRC = "src/**/*.js";

// watch for changes in es6 js files and transpile them to es5 files
gulp.task("default", function () {
  return gulp.src(SRC)
		.pipe(watch(SRC))
    .pipe(babel({
			//modules: 'system'
		}))
    .pipe(gulp.dest("dist"));
});
