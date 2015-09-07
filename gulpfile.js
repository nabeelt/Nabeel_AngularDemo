var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache');

gulp.task('scripts', function() {
  return gulp.src('assets/js/*.js') //returs a readable stream
    .pipe(concat('minified.js'))  // node.js function that takes readable stream and hooks the output to dest writable stream
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('assets/gulp/js')) //returs a writable stream
    .pipe(notify({ message: 'Scripts task complete' }));
})

gulp.task('images', function() {
  return gulp.src('assets/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/gulp/img'))
    .pipe(notify({ message: 'Images task complete' }));
})
gulp.task('styles',function(){
	return gulp.src('assets/css/**/*')
		.pipe(minifycss())
		.pipe(concat('minified.css'))
		.pipe(gulp.dest('assets/gulp/styles'))
		.pipe(notify({message : 'style task completed'}));
})
gulp.task('watch',function(){
	gulp.watch('assets/js/**/*',['scripts']);
	gulp.watch('assets/images/**/*',['images']);
	gulp.watch('assets/css/**/*',['styles']);
})

gulp.task('default', function() {
    gulp.start('scripts','images','styles');
})

gulp.task('sayhello',function(){
	console.log('this is gulp custom task');
});