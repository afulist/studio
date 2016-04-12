(function() {
  'use strict';

  angular
    .module('travel')
    .controller('HomeRightController', HomeRightController);

  /** @ngInject */
  function HomeRightController($log, $scope, $state, $timeout) {
    var vm = this;

    // ==view data==
    vm.pluginOn = true;

    // ==view func==

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      $log.debug('load HomeRightController');
      // fix fb css bug
      $scope.$on('$stateChangeStart', function (event, toState, toParams) {
        // close fb page plugin in desktop
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
