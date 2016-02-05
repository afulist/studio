// CUSTOM: using 'gulp tag' to tag in git from package.json
'use strict';

var gulp = require('gulp');
var tag_version = require('gulp-tag-version');

// Assuming there's "version: 1.2.3" in package.json,
// tag the last commit as "v1.2.3"
gulp.task('tag', function() {
  return gulp.src(['./package.json']).pipe(tag_version());
});