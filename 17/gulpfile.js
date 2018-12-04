var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    del = require('del'),
    fs = require("fs"),
    browserSync = require('browser-sync'),
    browserInstance;

sass.compiler = require('node-sass');

var sassPaths = ['./src/sass/**/[^_]*.sass', './src/scss/**/[^_]*.scss'],
    sassPrivatePaths = ['./src/sass/**/*.sass', './src/scss/**/*.scss'];

gulp.task('compile-pug:dist', function () {
    return compilePug('public/dist', {
        data: requireJson('./src/json/data.json')
    });
});

gulp.task('compile-sass:dist', function () {
    return compileSass(sassPaths, './public/dist/style/');
});

gulp.task('clien:dist', function () {
    return del(['dist']);
});

gulp.task('compile-pug:temp', function () {
    return compilePug('public/temp', {
        pretty: true,
        data: requireJson('./src/json/data.json')
    });
});

gulp.task('compile-sass:temp', function () {
    return compileSass(sassPaths, './public/temp/style/');
});

gulp.task('clien:temp', function () {
    return del(['temp']);
});

gulp.task('browser:run:temp', function (done) {
    browserInstance = browserSync.create();

    browserInstance.init({
        server: {
            baseDir: './public/temp/'
        },
        serveStatic: [
            {
                route: '/libs/bootstrap',
                dir: './node_modules/bootstrap/dist/'
            },
            {
                route: '/libs/jquery',
                dir: './node_modules/jquery/dist/'
            },
            {
                route: '/libs/js',
                dir: './src/js/'
            },
             {
                route: '/libs/images',
                dir: './src/images/'
            }
        ]
    });

    done();
});

gulp.task('browser:reload', function (done) {
    browserInstance.reload();

    done();
});

gulp.task('build', gulp.series('clien:dist', 'compile-pug:dist', 'compile-sass:dist'));

gulp.task('dev:compile', gulp.parallel('compile-pug:temp', 'compile-sass:temp'));

gulp.task('dev', gulp.series('clien:temp', 'dev:compile', 'browser:run:temp', function watch() {
    gulp.watch(sassPrivatePaths, gulp.series('compile-sass:temp', 'browser:reload'));
    return gulp.watch(['src/pug/**/*.pug', './src/json/data.json'], gulp.series('compile-pug:temp', 'browser:reload'));
}));

function compilePug(dest, option) {
    option = option || {};

    return gulp.src('src/pug/**/[^_]*.pug')
        .pipe(pug(option))
        .pipe(gulp.dest(dest));
}

function compileSass(from, to) {
    return gulp.src(from)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(to));
}

function requireJson(url) {
    var content = fs.readFileSync(url);

    return JSON.parse(content)
}