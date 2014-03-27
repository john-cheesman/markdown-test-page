var gulp 	 = require('gulp'),
	markdown = require('gulp-markdown');

// Markdown task
gulp.task('markdown', function() {
	return gulp.src('*.md')
		.pipe('gulp-markdown')
		.pipe(gulp.dest());
});

// Default task
gulp.task('default', function() {
	gulp.start('markdown');
});