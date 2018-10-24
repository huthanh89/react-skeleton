//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const _             = require('lodash');
const gulp          = require('gulp');
const nodemon       = require('gulp-nodemon');
const livereload    = require('gulp-livereload');
const webpack       = require('webpack-stream');
const webpackConfig = require('./webpack.config');

//-----------------------------------------------------------------------------//
// Tasks
//-----------------------------------------------------------------------------//

gulp.task('compile-js', (cb) => {

    let config = _.assignIn(webpackConfig, {
        mode: 'development'
    });

    let reload = function(){
        livereload.reload();
        cb();
    };

    gulp.src(__filename)
        .pipe(webpack({
            config: config
        }))
        .pipe(gulp.dest('dist')).on('end', reload);
});

gulp.task('reload', () => {
    livereload.reload();
});

gulp.task('default', () => {

    nodemon({
        script: 'index.js',
        ext:    'js html',
        watch: ['index.js'],
        env:  { 'NODE_ENV': 'development' }
    });

    // Start listening with livereload.

    livereload({ start: true });
});

//-----------------------------------------------------------------------------//
// Watch changes
//-----------------------------------------------------------------------------//

gulp.watch('src/index.js', ['compile-js']);

//-----------------------------------------------------------------------------//