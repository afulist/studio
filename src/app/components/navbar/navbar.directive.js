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
      vm.selectedLoc = { id: 2, name: '台灣' };
      vm.locations = [
        { id: 2, name: '台灣' },
        { id: 1, name: '全部地區' },
        { id: 3, name: '東南亞' },{ id: 6, name: '東東南亞' },{ id: 7, name: '東南亞東東' },
        { id: 5, name: 'bbbbbbbbbbbbbbbbbbbbbbbb111' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' }
      ];

      // ==view func==
      vm.toggleSidenav = toggleSidenav;
      vm.showTopNavBottomSheet = showTopNavBottomSheet;
      vm.search = search;

      // ==all func==
      // open or close Sidenav exclusive
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

      // show BottomSheet internally
      function bottomSheet() {
        $mdBottomSheet.show({
          templateUrl: 'app/components/navbar/topnav-bottom-sheet.html',
          controller: 'TopNavBottomSheetController',
          controllerAs: 'bvm'
        }).then(function(clickedItem) {
          $log.debug(clickedItem);
        });
      }

      // check Sidenav then show BottomSheet
      function showTopNavBottomSheet() {
        if ($mdSidenav('right').isOpen()) {
          $mdSidenav('right').close().then(function(){
             bottomSheet();
          });
        } else if($mdSidenav('left').isOpen()) {
          $mdSidenav('left').close().then(function(){
             bottomSheet();
          });
        } else {
          bottomSheet();
        }
      }

      // search keyword
      function search() {
        $log.debug('search');
      }

    }
  }

})();
