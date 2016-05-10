(function() {
  'use strict';

  angular
    .module('travel')
    .controller('MyplanEditRightController', MyplanEditRightController);

  /** @ngInject */
  function MyplanEditRightController($log, $scope, $state, $timeout, $mdMedia) {
    var vm = this;

    // ==view data==
    vm.pluginOn = false;

    // ==view func==

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      $log.debug('load HomeRightController');
      // fix fb css bug by closing fb page plugin in desktop
      if ($mdMedia('gt-md') || $mdMedia('md')) {
        vm.pluginOn = true;
      }
      $scope.$on('$stateChangeStart', function (event, toState, toParams) {
        if (vm.pluginOn) { // prevent infinite loading
          event.preventDefault(); // stop stateChange
          vm.pluginOn = false;
        }
        // restart stateChange
        $timeout(function() { // prevent infinite loading
           $state.go(toState.name, toParams); // TODO-state: test
        }, 5);
      });
    }

  }
})();
