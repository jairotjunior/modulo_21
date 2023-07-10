const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles (){
    return gulp.src('./styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist'));
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./styles/*.scss', gulp.parallel(styles));
}