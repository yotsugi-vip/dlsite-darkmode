const gulp = require('gulp');
const sass = require('gulp-sass');
const glob = require('gulp-sass-glob');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const out_scss = "./public/style/";
const in_scss = "./src/style/**/*.scss";
const out_js = "./public/js/";

/** SASSコンパイル */
gulp.task('sass', (fn) => {
    gulp.src(in_scss)
        .pipe(glob())
        .pipe(sass())
        .pipe(gulp.dest(out_scss));

    console.log('now compile scss...');
    fn();
});

/** JSコンパイル */
gulp.task('js', (fn) => {
    webpackStream(webpackConfig.home, webpack)
        .pipe(gulp.dest(out_js));

    webpackStream(webpackConfig.play, webpack)
        .pipe(gulp.dest(out_js));

    console.log("webpack");
    fn();
});

/** 変更監視 */
gulp.task('watch', (fn) => {
    gulp.watch(in_scss, gulp.task('sass'));

    console.log('gulp watch start')
    fn();
});

gulp.task('default', gulp.parallel('sass', 'js'));