var gulp = require('gulp');
var less = require('gulp-less');
var jsmin = require('gulp-jsmin');
var minCss = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('default',['jsmin','mincss','watch'], function(){
	console.log('default');
});	

gulp.task('less', function(){
	return gulp.src('./src/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./src/css'));
});

gulp.task('mincss', ['less'], function(){
	gulp.src('./src/css/*.css', {base: 'src'})
		.pipe(minCss())
		.pipe(gulp.dest('./dist'))
		.pipe(livereload());
});

gulp.task('jsmin', function(){
	gulp.src('./src/js/*.js', { base: 'src' })
		.pipe(jsmin())
		.pipe(gulp.dest('./dist'));
});



gulp.task('watch',function(){
    livereload.listen();
	gulp.watch('./src/less/*.less',['mincss']);
});