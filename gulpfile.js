var gulp = require('gulp');
var tslint = require('gulp-tslint');
var config = require('./gulp.config')();

function check() {
    var options = {
        configuration: config.tslint.rules,
        formatter: config.tslint.formatter
    };

    return gulp
        .src(config.allts)
        .pipe(tslint(options))
        .pipe(tslint.report());
}

exports.check = check;