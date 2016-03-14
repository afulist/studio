(function() {
  'use strict';

  angular
    .module('travel')
    .controller('HomeLeftController', HomeLeftController);

  /** @ngInject */
  function HomeLeftController($log) {
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
