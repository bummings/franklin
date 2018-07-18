const gulp        = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass        = require('gulp-sass'),
      imagemin    = require('gulp-imagemin'),
      prefix      = require('gulp-autoprefixer'),
      postcss     = require('gulp-postcss'),
      concat      = require('gulp-concat'),
      merge       = require('merge-stream'),
      uglify      = require('gulp-uglify'),
      cleanCSS    = require('gulp-clean-css');
  
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    injectChanges: true,
    server: "./app"
  });
});

gulp.task('sass', function () {
  return gulp.src("app/scss/*.scss")
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream({match: '**/*.css'}))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['serve', 'sass'], function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/scss/**/*.sass', ['sass']);
  gulp.watch('app/scss/**/*.scss', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('clean-css', () => {
  return gulp.src('css/*.css')
  .pipe(concat('styles.css'))
  .pipe(prefix('last 2 versions'))
});



gulp.task('default', ['watch']);
