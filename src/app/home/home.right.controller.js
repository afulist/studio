(function() {
  'use strict';

  angular
    .module('travel')
    .controller('HomeRightController', HomeRightController);

  /** @ngInject */
  function HomeRightController($log, moment) {
    var vm = this;

    // ==view data==
    vm.relativeDate = moment(1453453611143).fromNow();

    // ==view func==

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      $log.debug('load HomeRightController');
    }

  }
})();
