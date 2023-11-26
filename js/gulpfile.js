const gulp = require("gulp");
const inject = require("gulp-inject");

function injectHtml() {
  return gulp
    .src("./index.html")
    .pipe(
      inject(gulp.src("./components/*.html", { read: false }), {
        relative: true,
        starttag: "<!-- inject:components -->",
        endtag: "<!-- endinject -->",
        transform: function (filepath, file, i, length) {
          return '<link rel="import" href="' + filepath + '">';
        },
      })
    )
    .pipe(gulp.dest("./"));
}

exports.default = gulp.series(injectHtml);
