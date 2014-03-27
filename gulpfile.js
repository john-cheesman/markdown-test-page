var gulp 	 = require('gulp'),
	markdown = require('gulp-markdown');

// Markdown task
gulp.task('markdown', function() {
	return gulp.src('src/*.md')
		.pipe(markdown())
		.pipe(gulp.dest(''));
});

// Watch task
gulp.task('watch', function() {
	gulp.watch('src/*.md', ['markdown']);
});

// Default task
gulp.task('default', function() {
	gulp.start('markdown');
});