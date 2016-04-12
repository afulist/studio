(function() {
  'use strict';

  angular
    .module('travel')
    .controller('TopNavBottomSheetController', TopNavBottomSheetCtrl);

  /** @ngInject */
  function TopNavBottomSheetCtrl($log, $mdBottomSheet) {
    var vm = this;

    // ==view data==

    // ==view func==
    vm.listItemClick = listItemClick;

    // ==all func==
    // click nav item
    function listItemClick(item) {
      // close sheet
      $log.debug('listItemClick');
      $mdBottomSheet.hide(item);
      // scroll to top has bug if no $timeout here
      // $timeout(function function_name(argument) { // eslint-disable-line
      //   document.getElementById('top').scrollIntoView(true); // eslint-disable-line
      // }, 150);
    }

  }
})();
