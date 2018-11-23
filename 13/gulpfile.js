var gulp = require('gulp'),
    pug = require('gulp-pug'),
    del = require('del'),
    fs = require("fs"),
    browserSync = require('browser-sync'),
    browserInstance;

gulp.task('compile-pug:dist', function () {
    return compilePug('dist', {
        data: requireJson('./data.json')
    });
});

gulp.task('clien:dist', function () {
    return del(['dist']);
});

gulp.task('compile-pug:temp', function () {
    return compilePug('temp', {
        pretty: true,
        data: requireJson('./data.json')
    });
});

gulp.task('clien:temp', function () {
    return del(['temp']);
});

gulp.task('browser:run:temp', function (done) {
    browserInstance = browserSync.create();

    browserInstance.init({
        server: {
            baseDir: './temp'
        },
        serveStatic: [
            {
                route: '/libs/bootstrap',
                dir: './node_modules/bootstrap/dist/'
            },
            {
                route: '/libs/jquery',
                dir: './node_modules/jquery/dist/'
            }
        ]
    });

    done();
});

gulp.task('browser:reload', function (done) {
    browserInstance.reload();

    done();
});

gulp.task('build', gulp.series('clien:dist', 'compile-pug:dist'));

gulp.task('dev', gulp.series('clien:temp', 'compile-pug:temp', 'browser:run:temp', function watch() {
    return gulp.watch(['src/**/*.pug', './data.json'], gulp.series('compile-pug:temp', 'browser:reload'));
}));

gulp.task('browser:devJs', function (done) {
    browserInstance = browserSync.create();

    browserInstance.init({
        server: {
            baseDir: "./js"
        }
    });

    done();
});

gulp.task('devJs', gulp.series('browser:devJs', function watch() {
    return gulp.watch(['./js/**/*'], gulp.series('browser:reload'));
}));



function compilePug(dest, option) {
    option = option || {};

    return gulp.src('src/**/[^_]*.pug')
        .pipe(pug(option))
        .pipe(gulp.dest(dest));
}

function requireJson(url) {
    var content = fs.readFileSync(url);

    return JSON.parse(content)
}