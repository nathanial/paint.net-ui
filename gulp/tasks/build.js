var gulp = require('gulp');
var babel = require('gulp-babel');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function(){
  var babelConfig = {
    stage: 0,
    optional: ['runtime'],
    sourceMaps: 'inline'
  }

  var sourcemapInit = {loadMaps: true};

  var sourcemapWrite = {};
  gulp.src(['src/**/*.js'])
      .pipe(babel(babelConfig))
      .pipe(gulp.dest('build'));
  gulp.src('src/**/*.jsx')
      .pipe(babel(babelConfig))
      .pipe(gulp.dest('build'));
  gulp.src('node_modules/codemirror/lib/*.css').pipe(gulp.dest('build/codemirror'));
  gulp.src('node_modules/codemirror/lib/*.js').pipe(gulp.dest('build/codemirror'));
  gulp.src('node_modules/codemirror/mode/javascript/javascript.js').pipe(gulp.dest('build/codemirror'));

  gulp.src('node_modules/font-awesome/**/*').pipe(gulp.dest('build/font-awesome'));
  gulp.src('src/**/*.html').pipe(gulp.dest('build'));
  gulp.src('src/**/*.json').pipe(gulp.dest('build'));
  gulp.src('src/**/*.css').pipe(gulp.dest('build'));
  gulp.src('src/images/**/*', {base: 'src'}).pipe(gulp.dest('build'));
  gulp.src('src/**/*.less').pipe(less({
    paths: [
     './src',
     './node_modules/bootstrap-less']
  })).pipe(gulp.dest('build'));
});
