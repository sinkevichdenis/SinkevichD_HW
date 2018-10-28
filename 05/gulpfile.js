var gulp = require('gulp'),
    pug = require('gulp-pug'),
    del = require('del'),
    browserSync = require('browser-sync'),
    browserInstance;

gulp.task('compile-pug:dist', function () {
    return compilePug('dist');
});

gulp.task('clien:dist', function () {
    return del(['dist']);
});

gulp.task('compile-pug:temp', function () {
    return compilePug('temp', {
        pretty: true
    });
});

gulp.task('clien:temp', function () {
    return del(['temp']);
});

gulp.task('browser:run:temp', function (done) {
    browserInstance = browserSync.create();

    browserInstance.init({
        server: {
            baseDir: "./temp"
        }
    });

    done();
});

gulp.task('browser:reload', function (done) {
    browserInstance.reload();

    done();
});

gulp.task('build', gulp.series('clien:dist', 'compile-pug:dist'));

gulp.task('dev', gulp.series('clien:temp', 'compile-pug:temp', 'browser:run:temp', function watch() {
    return gulp.watch('src/**/*.pug', gulp.series('compile-pug:temp', 'browser:reload'));
}));


function compilePug(dest, option) {
    option = option || {};

    return gulp.src('src/**/[^_]*.pug')
        .pipe(pug(option))
        .pipe(gulp.dest(dest));
}