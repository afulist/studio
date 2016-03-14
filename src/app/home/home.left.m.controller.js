(function() {
  'use strict';

  angular
    .module('travel')
    .controller('HomeLeftMCenterController', HomeLeftMCenterController);

  /** @ngInject */
  function HomeLeftMCenterController($log) {
    var vm = this;

    // ==view data==
    //vm.relativeDate = moment(1453453611143).fromNow();

    // ==view func==
    vm.init = init;

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      $log.debug('load controller');
    }

  }
})();
