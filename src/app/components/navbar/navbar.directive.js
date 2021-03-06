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
    function NavbarController($element, $log, $mdSidenav, $mdBottomSheet, $scope, $state, $timeout, mobileFeature) {
      var vm = this;

      // ==view data==
      vm.lockClick = false;
      vm.selectedLoc = { id: 2, name: '台灣' };
      vm.locations = [
        { id: 1, name: '全部' },
        { id: 2, name: '台灣' },
        { id: 3, name: '東南亞' },{ id: 6, name: '東東南亞' },{ id: 7, name: '東南亞東東' },
        { id: 5, name: 'bbbbbbbbbbbbbbbbbbbbbbbb111' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' },{ id: 4, name: 'aaaaaaaaaaaaa' }
      ];
      vm.suggsetionKeyword = loadSuggsetion();
      vm.searchText = '';
      vm.titleM = '';
      vm.optLeftNameM = '';
      vm.prevStateM = '';
      vm.optRightNameM = '';

      // ==view func==
      vm.toggleSidenav = toggleSidenav;
      vm.navBack = navBack;
      vm.showTopNavBottomSheet = showTopNavBottomSheet;
      vm.querySuggsetion = querySuggsetion;
      vm.selectedItemChange = selectedItemChange;

      // ==init func==
      init();

      // ==all func==
      // init
      function init() {
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams) {
          // set search text and selectedLoc by routing param
          if (toState.name !== 'mainLayout.result') {
            vm.searchText = '';
            vm.selectedLoc = { id: 2, name: '台灣' };
          } else {
            vm.searchText = toParams.keyword;
            angular.forEach(vm.locations, function (item) {
              if(item.id.toString() === toParams.location) {
                vm.selectedLoc = item;
              }
            });
          }
          // get title in mobile navBar
          vm.titleM = mobileFeature.title;
          vm.optLeftNameM = mobileFeature.optLeftName;
          vm.prevStateM = mobileFeature.prevState;
          vm.optRightNameM = mobileFeature.optRightName;
        });
      }

      // open or close Sidenav exclusive with click locking
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

      // go back to previous page
      function navBack(prevState) {
        $state.go(prevState, {}, { reload: true }); // reload to get reslove data again
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
        vm.lockClick = true;
        if ($mdSidenav('right').isOpen()) {
          $mdSidenav('right').close().then(function(){
             vm.lockClick = false;
             bottomSheet();
          });
        } else if($mdSidenav('left').isOpen()) {
          $mdSidenav('left').close().then(function(){
             vm.lockClick = false;
             bottomSheet();
          });
        } else {
          vm.lockClick = false;
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
          // scroll to top
          document.getElementById('top').scrollIntoView(true); // eslint-disable-line
          // delay to blur input for routing change to prev page
          $timeout(function() {
            document.getElementById('input-3').blur(); // eslint-disable-line
            // TODO-search: storing keyword
            // change page
            $state.go('mainLayout.result', {location: vm.selectedLoc.id, keyword: item.value});
          }, 150);
        }
      }

    }
  }

})();
