(function() {
  'use strict';

  angular
    .module('travel')
    .run(runBlock);

  /** @ngInject */
  // after config block: Service Setting
  function runBlock($log, $rootScope, $timeout, firebase) {
    // firebase env
    /* @if ENV='dev' */
    // only used in local, shoundn't deploy online
    firebase.root = 'https://pytrip-dev.firebaseio.com/';
    firebase.secret = 'wDPbV8cdgaTvyjFnYoXUhFbP3t4OsW0sl7tLAjVl';
    /* @endif */
    /* @if ENV='stage' **
    // Can switch to dev if needed
    firebase.root = 'https://pytrip.firebaseio.com/';
    /* @endif */
    /* @if ENV='prod' **
    firebase.root = 'https://pytrip.firebaseio.com/';
    /* @endif */

    // auto scroll
    $rootScope.$on('$viewContentLoaded', function () { // eslint-disable-line
      // scroll to top has bug if no $timeout here
      var timeout = $timeout(function () {
        if (document.readyState === 'complete') { // eslint-disable-line
          document.getElementById('top').scrollIntoView(true); // eslint-disable-line
          clearTimeout(timeout);
        }
      }, 150);
    });

    // debug log
    $log.debug('runBlock end');
  }

})();
