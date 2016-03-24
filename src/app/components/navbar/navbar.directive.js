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
      vm.lockClick = false;
      vm.selectedLoc = { id: 2, name: '台灣' };
      vm.locations = [
        { id: 2, name: '台灣' },
        { id: 1, name: '全部' },
        { id: 3, name: '東南亞' },{ id: 6, name: '東東南亞' },{ id: 7, name: '東南亞東東' },
        { id: 5, name: 'bbbbbbbbbbbbbbbbbbbbbbbb111' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' }
      ];
      vm.suggsetionKeyword = loadSuggsetion();
      vm.searchText = '';

      // ==view func==
      vm.toggleSidenav = toggleSidenav;
      vm.showTopNavBottomSheet = showTopNavBottomSheet;
      vm.querySuggsetion = querySuggsetion;
      vm.selectedItemChange = selectedItemChange;

      // ==all func==
      // open or close Sidenav exclusive
      function toggleSidenav(menuId) {
        vm.lockClick = true;
        if (menuId === 'left') {
          $mdSidenav('right').close().then(function(){
             $mdSidenav(menuId).toggle().then(function(){
              vm.lockClick = false;
             });
          });
        } else {
          $mdSidenav('left').close().then(function(){
             $mdSidenav(menuId).toggle().then(function(){
              vm.lockClick = false;
             });
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

      // get keyword suggestion
      function loadSuggsetion() {
        var allStates = 'Alaskaaa, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                Florida, 中文, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                Wisconsin, Wyoming';
        return allStates.split(/, +/g).map( function (state) {
          return {
            value: state.toLowerCase(),
            display: state
          };
        });
      }

      // search suggsetion autocomplete
      function querySuggsetion (query) {
        var result = query ? vm.suggsetionKeyword.filter( createFilterFor(query) ) : vm.suggsetionKeyword;
        if (query) {
          // add current searchText on everytime query
          result.unshift({
            value: vm.searchText,
            display: vm.searchText,
            type: 'currentText'
          });
        }
        return result;
      }

      // Internal filter
      function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(state) {
          return (state.value.indexOf(lowercaseQuery) === 0);
        };
      }

      // search keyword on selected
      function selectedItemChange(item) {
        if (item) { // prevent backspace trigger search
          $log.debug('Item changed to ', item, 'with ', vm.selectedLoc);
          // TODO-?: storing keyword
        }
      }

    }
  }

})();
