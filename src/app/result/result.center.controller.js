(function() {
  'use strict';

  angular
    .module('travel')
    .controller('ResultCenterController', ResultCenterController);

  /** @ngInject */
  function ResultCenterController($log) {
    var vm = this;

    // ==view data==
    vm.test = '';

    // ==view func==

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      $log.debug('ResultCenterController');
    }


  }
})();
