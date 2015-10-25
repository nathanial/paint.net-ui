var gulp = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel');

gulp.task('watch', ['build'], function(){
  gulp.watch('src/**/*.*', ['build']);
});
