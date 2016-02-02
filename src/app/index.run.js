(function() {
  'use strict';

  angular
    .module('travel')
    .run(runBlock);

  /** @ngInject */
  // after config block
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
