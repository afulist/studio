(function() {
  'use strict';

  angular
    .module('travel')
    .controller('HomeTripRightMController', HomeTripRightMController);

  /** @ngInject */
  function HomeTripRightMController($log, $scope, $mdSidenav) {
    var vm = this;

    // ==view data==

    // ==view func==
    vm.checkSide = checkSide;

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      $log.debug('load HomeRightMController(m)');
    }

    // fix fb css bug by closing fb page plugin in mobile
    function checkSide() {
      if ($mdSidenav('right').isOpen()) {
        return true;
      }
    }


  }
})();
