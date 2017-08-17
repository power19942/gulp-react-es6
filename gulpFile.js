var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


gulp.task('browserify',function(){
    browserify('./src/js/main.js')
.transform("babelify"/*, {presets: ["es2015", "react","stage-0"]}*/)
    .bundle()
    .pipe(source("main.js"))
    .pipe(gulp.dest('dest/js'))
});

gulp.task('default',['browserify'],function(){
    return gulp.watch('src/**/*.*',['browserify'])
})