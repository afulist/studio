(function() {
  'use strict';

  angular
    .module('travel')
    .controller('SearchMCenterController', SearchMCenterController);

  /** @ngInject */
  function SearchMCenterController($log) {
    var vm = this;

    // ==view data==
    vm.test = '';

    // ==view func==

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      $log.debug('SearchMCenterController');
    }


  }
})();
