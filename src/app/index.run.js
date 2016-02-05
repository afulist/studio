(function() {
  'use strict';

  angular
    .module('travel')
    .run(runBlock);

  /** @ngInject */
  // after config block
  function runBlock($log, firebase) {
    // firebase env
    /* @if ENV='dev' */
    firebase.root = 'https://pytrip-dev.firebaseio.com/';
    firebase.secret = 'wDPbV8cdgaTvyjFnYoXUhFbP3t4OsW0sl7tLAjVl';
    /* @endif */
    /* @if ENV='stage' **
    firebase.root = 'https://pytrip.firebaseio.com/';
    /* @endif */
    /* @if ENV='prod' **
    firebase.root = 'https://pytrip.firebaseio.com/';
    /* @endif */

    $log.debug('runBlock end');
  }

})();
