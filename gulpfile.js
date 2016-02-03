/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  CUSTOM: Default task launch the serve task
 */
gulp.task('default', function () {
  gulp.start('serve');
});


/**
 *  CUSTOM: clean temporaries directories and launch the
 *  main optimization build task by 'gulp build --env $arg'
 */
gulp.task('build', ['clean'], function () {
  gulp.start('build-without-clean');
});