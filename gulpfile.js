/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

/*
* Siplificar js 'demo'
*/
gulp.task('js', function () {
  gulp.src('js/*.js')
  .pipe(concat('todo.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/build/'))
});