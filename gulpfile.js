let gulp = require('gulp');
let requireDir = require('require-dir');
let dir = requireDir('./tasks');

gulp.task('default', ['sass']);