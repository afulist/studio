(function() {
  'use strict';

  angular
    .module('travel')
    .controller('MoreCenterController', MoreCenterController);

  /** @ngInject */
  function MoreCenterController($log) {
    var vm = this;

    // ==view data==
    vm.test = '';

    // ==view func==

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      $log.debug('more');
    }


  }
})();
