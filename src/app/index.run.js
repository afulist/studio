(function() {
  'use strict';

  angular
    .module('travel')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
