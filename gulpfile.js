var gulp = require('gulp')
  , postcss = require('gulp-postcss')
  , nested = require('postcss-nested')
  , autoprefixer = require('autoprefixer');

gulp.task('default', ['dist:style']);

gulp.task('dist:style', function(){
  gulp.src('./src/pureslider.css')
    .pipe(postcss([nested, autoprefixer]))
    .pipe(gulp.dest('./dist'));
});
