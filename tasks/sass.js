let gulp = require('gulp');
let sass = require('gulp-sass');

let sassloc = 'build/app/style/sass/**/main.scss';
let cssloc = 'build/app/style/css/';

gulp.task('sass', function () {
	gulp.src(sassloc)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(cssloc))
});