const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', () =>
	gulp.src('todo.js')
		.pipe(mocha())
		.once('error', () => {
			process.exit(1);
		})
		.once('end', () => {
			process.exit();
		})
);