var R         = require('ramda');
var gulp      = require('gulp');
var shell = require('gulp-shell');
var jasmine   = require('gulp-jasmine');
var reporters = require('jasmine-reporters');
var argv      = require('minimist')(process.argv.slice(2));
var testGlob  = R.ifElse(
	R.has('mod'),
	R.prop('mod'),
	R.always('**')
)(argv);

var testFiles = R.join('', ['test/**/', testGlob, '*Test.js']);

var exitIfNotDevMode = function () {
    var isDevMode = R.anyPass([
        R.has('mod'),
        R.pipe(R.prop('_'), R.contains('tdd'))
    ]);

    if (!isDevMode(argv)) process.exit();
};

gulp.task('start', shell.task(["node app"]));

gulp.task('test', function () {
	return gulp.src(testFiles).pipe(
        jasmine({
            verbose : true,
            includeStackTrace : true
        })
    ).on('end', exitIfNotDevMode);
});

