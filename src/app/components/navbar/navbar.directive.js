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
    function NavbarController($log, $mdSidenav, $mdBottomSheet) {
      var vm = this;

      // ==view data==
      // "vm.title" is avaible by directive option "bindToController: true"

      // ==view func==
      vm.toggleSidenav = toggleSidenav;
      vm.showTopNavBottomSheet = showTopNavBottomSheet;

      // ==all func==
      function toggleSidenav(menuId) {
        if (menuId === 'left') {
          $mdSidenav('right').close().then(function(){
             $mdSidenav(menuId).toggle();
          });
        } else {
          $mdSidenav('left').close().then(function(){
             $mdSidenav(menuId).toggle();
          });
        }
      }
      function showTopNavBottomSheet() {
        $mdBottomSheet.show({
          templateUrl: 'app/components/navbar/topnav-bottom-sheet.html',
          controller: 'TopNavBottomSheetController',
          controllerAs: 'bvm'
        }).then(function(clickedItem) {
          $log.debug(clickedItem);
        });
      }
    }
  }

})();
