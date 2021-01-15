const gulp = require('gulp');
const sass = require('gulp-sass');
const glob = require('gulp-sass-glob');
const output = "./public/style/";
const input = "./src/style/**/*.scss";

/** コンパイル */
gulp.task('sass', (fn) => {
    gulp.src(input)
        .pipe(glob())
        .pipe(sass())
        .pipe(gulp.dest(output));

    console.log('now compile...');
    fn();
});

/** 変更監視 */
gulp.task('watch', (fn) => {
    gulp.watch(input, gulp.task('sass'));

    console.log('gulp watch start')
    fn();
});

gulp.task('default', gulp.task('sass'));