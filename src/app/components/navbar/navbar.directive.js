(function() {
  'use strict';

  angular
    .module('travel')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          logo: '@'
      },
      controller: NavbarController,
      controllerAs: 'dvm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($mdSidenav) {
      var vm = this;

      // ==view data==
      // "vm.title" is avaible by directive option "bindToController: true"

      // ==view func==
      vm.toggleSidenav = toggleSidenav;

      // ==all func==
      function toggleSidenav(menuId) {
        $mdSidenav(menuId).toggle();
      }
    }
  }

})();
