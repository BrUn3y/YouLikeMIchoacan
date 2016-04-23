var gulp = require('gulp');
gulp.task('comprimir', function() {
gulp.src('lib/*.js')
.pipe(uglify())
.pipe(gulp.dest('dist'))
});