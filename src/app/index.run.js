(function() {
  'use strict';

  angular
    .module('travel')
    .run(runBlock);

  /** @ngInject */
  // after config block: Service Setting
  function runBlock($log, $rootScope, $timeout, $mdMedia, firebase) {
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
    var delay
    if ($mdMedia('gt-md') || $mdMedia('md')) {
      delay = 0;
    } else {
      delay = 300;
    }
    $rootScope.$on('$stateChangeSuccess', function () { // eslint-disable-line
      // scroll to top has bug if no $timeout here
      $timeout(function () { // eslint-disable-line
        document.getElementById('top').scrollIntoView(true); // eslint-disable-line
      }, delay);
    });

    // debug log
    $log.debug('runBlock end');
  }

})();
